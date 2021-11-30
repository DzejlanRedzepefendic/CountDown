const asyncWrapper = require('../middlewares/async')
const {
  findAllCountdowns,
  createACountdown,
  findACountdown,
  findAndDeleteCountdown,
  findAndUpdateCountdown,
} = require('../services/countdown.js')

const getAllCountdowns = asyncWrapper(async (req, res) => {
  const countdowns = await findAllCountdowns()
  res.status(200).json({ countdowns })
})

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
  res
    .status(201)
    .json({ message: 'countdown created successfully', createCount })
})

const getCountdown = asyncWrapper(async (req, res) => {
  const { id: countdownID } = req.params
  let countdown
  try {
    countdown = await findACountdown(countdownID)
  } catch (errror) {
    return res.status(404).json({ error: 'Invalid id params' })
  }
  res.status(200).json({ countdown })
})

const updateCountdown = asyncWrapper(async (req, res) => {
  const { id: countdownID } = req.params
  let countdown
  try {
    countdown = await findAndUpdateCountdown(countdownID, req.body)
  } catch (error) {
    console.log(error)
    return res.status(404).json({ error: 'Invalid id params' })
  }
  res.status(200).json({ message: 'countdown updated successfully', countdown })
})

const deleteCountdown = asyncWrapper(async (req, res) => {
  const { id: countdownID } = req.params
  let countdown
  try {
    countdown = await findAndDeleteCountdown(countdownID)
    if (!countdown) {
      return res.status(400).json({ error: 'invalid id paramas' })
    }
  } catch (error) {
    return res.status(404).json({ error: 'invalid id paramas', message: error })
  }
  res.status(200).json({ message: 'countdown deleted successfully' })
})

module.exports = {
  getAllCountdowns,
  createCountdown,
  getCountdown,
  deleteCountdown,
  updateCountdown,
}
