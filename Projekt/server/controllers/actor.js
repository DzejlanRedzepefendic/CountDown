const asyncWrapper = require('../middlewares/async')
const {
  findAllActors,
  createAnActor,
  findOneActor,
  findAndUpdateActor,
  findAndDeleteActor,
} = require('../services/actor')

const getAllActors = asyncWrapper(async (req, res, next) => {
  const actors = await findAllActors()
  if (actors.length < 1) {
    return res.status(400).json({ error: 'Actors not found' })
  }
  res.status(200).json({ actors })
})

const createActor = asyncWrapper(async (req, res) => {
  const actor = await req.body
  let createActor
  if (!actor) {
    res.status(404)
  }
  try {
    createActor = await createAnActor(actor)
  } catch (error) {
    res.status(500).json({ error })
  }
  res.status(201).json({ createActor })
})

const getActor = asyncWrapper(async (req, res) => {
  const { id: productID } = req.params
  let actor
  try {
    actor = await findOneActor(productID)
  } catch (error) {
    return res.status(404).json({ error: 'Invalid id params' })
  }
  res.status(200).json({ actor })
})

const updateActor = asyncWrapper(async (req, res) => {
  const { id: productID } = req.params
  let actor
  try {
    actor = await findAndUpdateActor(productID, req.body)
  } catch (error) {
    return res.status(404).json({ error: 'Invalid id params' })
  }
  res.status(200).json({ actor })
})

const deleteActor = asyncWrapper(async (req, res) => {
  const { id: productID } = req.params
  let actor
  try {
    actor = await findAndDeleteActor(productID)
  } catch (error) {
    return res.status(404).json({ error: 'Invalid id params' })
  }
  res.status(200).json({ message: `actor ${productID} deleted`, data: actor })
})

module.exports = {
  getAllActors,
  createActor,
  getActor,
  updateActor,
  deleteActor,
}
