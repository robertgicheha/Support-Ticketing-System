const express = require('express')
const { request } = require('http')
const { errorHandler } = require('./middleware/errorMiddleware.js')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db.js')

//Connect to Database
connectDB()

const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Support Desk API' })
})

//Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started at ${PORT}`))
