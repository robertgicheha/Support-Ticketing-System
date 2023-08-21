const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt.js')

const User = require('../models/userModel')

//@Desc Register new user
//@router /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  //   console.log(req.body);

  const { name, email, password } = req.body

  //Validation
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please include all the fields')
  }

  //Find if user already exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)

    throw new Error('User Already exists')
  }

  //Hash Password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //Create User

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if(user){
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    })

  }else{
    res.status(400)
    throw new Error('Invalid User Data')
  }
})

//@Desc Login user
//@router /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route')
})

module.exports = {
  registerUser,
  loginUser,
}
