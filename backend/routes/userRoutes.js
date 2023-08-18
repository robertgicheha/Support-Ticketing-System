const express = require('express')

const router = express.Router()
const { registerUser, loginUser } = require('../controllers/userController')

//Register User
router.post('/', registerUser)

//Login User
router.post('/login', loginUser)

module.exports = router
