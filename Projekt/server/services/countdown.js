const Countdown = require('../models/countdown')

async function findAllCountdowns() {
  const countdown = await Countdown.find({})
  return countdown
}

async function createACountdown(countdown) {
  return Countdown.create(countdown)
}

module.exports = {
  findAllCountdowns,
  createACountdown,
}
