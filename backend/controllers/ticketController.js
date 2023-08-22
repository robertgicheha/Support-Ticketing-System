const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')

//@Desc Get user tickets
//@router GET /api/tickets/
//@access Private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'getTickets' })
})

//@Desc Create new tickets
//@router POST /api/tickets/
//@access Private
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'createTickets' })
})

module.exports = {
  getTickets,
  createTicket,
}
