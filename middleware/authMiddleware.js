const jwt = require('jsonwebtoken')
const { findUserById } = require('../utils/dataStore')

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await findUserById(decoded.id)

    if (!user) {
      return res.status(401).json({ success: false, message: 'Unauthorized' })
    }

    req.user = user
    return next()
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }
}

module.exports = authMiddleware
