const express = require('express')
const router = express.Router()

const {
  getAllCountdowns,
  createCountdown,
  getCountdown,
  deleteCountdown,
  updateCountdown,
} = require('../controllers/countdown')

router.route('/').get(getAllCountdowns).post(createCountdown)

router
  .route('/:id')
  .get(getCountdown)
  .delete(deleteCountdown)
  .patch(updateCountdown)
module.exports = router
