const express = require('express')
const router = express.router()

router.post('/', (req, res) => {
  res.send('Register Route')
})

module.exports = router
