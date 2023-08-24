const express = require('express')
const router = express.Router({ mergeParams: true })
const { getNotes, addNotes } = require('../controllers/noteController')

const { protect } = require('../middleware/authMiddleware')

//Get Notes
router.route('/').get(protect, getNotes)

//Add Routes
router.route('/').post(protect, addNotes)

module.exports = router
