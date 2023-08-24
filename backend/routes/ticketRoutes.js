const express = require('express')
const router = express.Router()
const {
  getTickets,
  createTicket,
  getSingleTicket,
  deleteTicket,
  updateTicket,
} = require('../controllers/ticketController')

const { protect } = require('../middleware/authMiddleware')

//Re- route into note router
const noteRouter = require('../routes/noteRoutes')
router.use('/:ticketId/notes', noteRouter)

//Get Tickets
router.route('/').get(protect, getTickets)

//Create a Ticket
router.route('/').post(protect, createTicket)

//Get a single Ticket
router.route('/:id').get(protect, getSingleTicket)

//Delete a ticket
router.route('/:id').delete(protect, deleteTicket)

//Update a Ticket
router.route('/:id').put(protect, updateTicket)

module.exports = router
