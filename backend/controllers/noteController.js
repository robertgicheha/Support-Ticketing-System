const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')
const Note = require('../models/noteModel')
const { model } = require('mongoose')

//@Desc Get user tickets
//@router GET /api/tickets/:ticketId/notes
//@access Private
const getNotes = asyncHandler(async (req, res) => {
  //Get user using the id in the JWT

  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User Not Found')
  }

  //Get ticket by user id
  const ticket = await Ticket.findById(req.params.ticketId)

  if (ticket.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const notes = await Note.find({ ticket: req.params.ticketId })

  res.status(200).json(notes)
})

//@Desc Create ticket note
//@router POST /api/tickets/:ticketId/notes
//@access Private
const addNotes = asyncHandler(async (req, res) => {
  //Get user using the id in the JWT

  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User Not Found')
  }

  //Get ticket by user id
  const ticket = await Ticket.findById(req.params.ticketId)

  if (ticket.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const notes = await Note.create({
    text: req.body.text,
    isStaff: false,
    user: req.user.id,
    ticket: req.params.ticketId,
  })

  res.status(200).json(notes)
})

module.exports = {
  getNotes,
  addNotes,
}
