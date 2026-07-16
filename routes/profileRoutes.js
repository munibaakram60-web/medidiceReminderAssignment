const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')

const { getProfile, updateProfile } = require('../controllers/profileController')

router.get('/', authMiddleware, getProfile)
router.get('/:id', authMiddleware, getProfile)
router.put('/', authMiddleware, updateProfile)
router.put('/:id', authMiddleware, updateProfile)

module.exports = router