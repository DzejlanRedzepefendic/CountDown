const express = require('express')
const router = express.Router()
const {
  getAllCountdowns,
  createCountdown,
} = require('../controllers/countdown')
router.route('/').get(getAllCountdowns).post(createCountdown)
module.exports = router
