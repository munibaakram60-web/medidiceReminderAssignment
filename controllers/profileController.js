const { findUserById, updateUser } = require('../utils/dataStore')

const sanitizeUser = (user) => {
    if (!user) return null
    const userObj = user.toObject ? user.toObject() : { ...user }
    delete userObj.password
    return userObj
}

const getProfile = async (req, res) => {
    try {
        const userId = req.params.id || req.user?._id?.toString() || req.user?.id
        const user = await findUserById(userId)
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' })
        }

        res.status(200).json({ success: true, user: sanitizeUser(user) })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

const updateProfile = async (req, res) => {
    try {
        const userId = req.params.id || req.user?._id?.toString() || req.user?.id
        const allowedUpdates = {
            name: req.body.name,
            fullName: req.body.fullName || req.body.name,
            phone: req.body.phone,
            age: req.body.age,
            gender: req.body.gender,
            bloodGroup: req.body.bloodGroup,
            weight: req.body.weight,
            emergencyContact: req.body.emergencyContact,
        }

        const updatedUser = await updateUser(userId, allowedUpdates)
        if (!updatedUser) {
            return res.status(404).json({ success: false, message: 'User not found' })
        }

        res.status(200).json({ success: true, message: 'Profile Updated Successfully', user: sanitizeUser(updatedUser) })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

module.exports = { getProfile, updateProfile }