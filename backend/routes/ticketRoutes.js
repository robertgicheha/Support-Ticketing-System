const express = require('express')
const router = express.Router()
const { getTickets, createTicket } = require('../controllers/ticketController')

const { protect } = require('../middleware/authMiddleware')

//Get a Ticket
router.route('/').get(protect, getTickets)

//Create a Ticket
router.route('/').post(protect, createTicket)

module.exports = router
