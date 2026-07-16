const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { createUser, findUserByEmail } = require('../utils/dataStore')

const createToken = (user) => jwt.sign({ id: user._id || user.id }, process.env.JWT_SECRET, { expiresIn: '7d' })

const sanitizeUser = (user) => {
    if (!user) return null
    const userObj = user.toObject ? user.toObject() : { ...user }
    delete userObj.password
    return userObj
}

const signup = async (req, res) => {
    try {
        const { name, fullName, email, password, phone, age, gender, bloodGroup, weight, emergencyContact } = req.body
        const displayName = name || fullName || 'User'
        const normalizedEmail = (email || '').toLowerCase().trim()

        if (!normalizedEmail || !password) {
            return res.status(400).json({ success: false, message: 'Email and password are required' })
        }

        const existingUser = await findUserByEmail(normalizedEmail)
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await createUser({
            name: displayName,
            fullName: displayName,
            email: normalizedEmail,
            password: hashedPassword,
            phone: phone || '',
            age: age || 0,
            gender: gender || 'Male',
            bloodGroup: bloodGroup || '',
            weight: weight || '',
            emergencyContact: emergencyContact || '',
        })

        const token = createToken(newUser)
        return res.status(201).json({ success: true, message: 'User Registered Successfully', token, user: sanitizeUser(newUser) })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const normalizedEmail = (email || '').toLowerCase().trim()

        if (!normalizedEmail || !password) {
            return res.status(400).json({ success: false, message: 'Email and password are required' })
        }

        const user = await findUserByEmail(normalizedEmail)
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid Password' })
        }

        const token = createToken(user)
        return res.status(200).json({ success: true, message: 'Login Successful', token, user: sanitizeUser(user) })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body
        const normalizedEmail = (email || '').toLowerCase().trim()
        const user = await findUserByEmail(normalizedEmail)
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' })
        }
        return res.status(200).json({ success: true, message: 'Reset Password API Working' })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

module.exports = { signup, login, forgotPassword }