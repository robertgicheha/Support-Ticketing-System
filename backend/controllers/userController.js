const asyncHandler = require('express-async-handler')

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
  res.send('Register Route')
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
