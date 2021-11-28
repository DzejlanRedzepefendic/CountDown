const asyncWrapper = require('../middlewares/async')
const { findAllActors, createAnActor } = require('../services/actor')

const getAllActors = asyncWrapper(async (req, res, next) => {
  const actors = await findAllActors()
  if (actors.length < 1) {
    return res.status(400).json({ error: 'Actors not found' })
  }
  res.status(200).json({ actors })
})

const createActor = asyncWrapper(async (req, res) => {
  const {
    birthName,
    height,
    pic,
    bio,
    dateOfBorn: { day, month, year },
    country,
    state,
    city,
  } = await req.body
  const result = await req.body
  const actor = await createAnActor(
    birthName,
    height,
    pic,
    bio,
    day,
    month,
    year,
    country,
    state,
    city
  )
  res.status(201).json({ result })
})

const getActor = asyncWrapper(async (req, res) => {})

const updateActor = asyncWrapper(async (req, res) => {})

const deleteActor = asyncWrapper(async (req, res) => {})

module.exports = {
  getAllActors,
  createActor,
  getActor,
  updateActor,
  deleteActor,
}
