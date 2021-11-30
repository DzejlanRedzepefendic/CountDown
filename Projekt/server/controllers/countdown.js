const asyncWrapper = require('../middlewares/async')
const {
  findAllCountdowns,
  createACountdown,
} = require('../services/countdown.js')

const getAllCountdowns = asyncWrapper(async (req, res) => {
  const countdowns = await findAllCountdowns()
  res.status(200).json({ countdowns })
})

const getCountdown = asyncWrapper(async (req, res) => {})

const createCountdown = asyncWrapper(async (req, res) => {
  const countdown = await req.body
  let createCount
  if (!countdown) {
    return res.status(404)
  }
  try {
    createCount = await createACountdown(countdown)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error })
  }
  res.status(201).json({ createCount })
})

const updateCountdown = asyncWrapper(async (req, res) => {})

const deleteCountdown = asyncWrapper(async (req, res) => {})

module.exports = {
  getAllCountdowns,
  createCountdown,
}
