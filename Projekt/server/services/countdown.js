const Countdown = require('../models/countdown')
const {
  findAll,
  create,
  findOne,
  findAndUpdate,
  findAndDelete,
} = require('../utils/db/dbcrud')

async function findAllCountdowns() {
  return findAll(Countdown)
}

async function createACountdown(countdown) {
  return create(Countdown, countdown)
}

async function findACountdown(id) {
  return findOne(Countdown, id)
}

async function findAndDeleteCountdown(id) {
  return findAndDelete(Countdown, id)
}

async function findAndUpdateCountdown(id, updatedCountdown) {
  return findAndUpdate(Countdown, id, updatedCountdown)
}

module.exports = {
  findAllCountdowns,
  createACountdown,
  findACountdown,
  findAndDeleteCountdown,
  findAndUpdateCountdown,
}
