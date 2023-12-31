const express = require('express')

const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController')

const {protect} = require('../middleware/authMiddleware')

//Register User
router.post('/', registerUser)

//Login User
router.post('/login', loginUser)

//Protected Route
router.get('/me', protect, getMe)

module.exports = router
