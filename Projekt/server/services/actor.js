const Actor = require('../models/actor')

async function findAllActors() {
  const actors = await Actor.find({})
  return actors
}

async function createAnActor(actor) {
  const create = Actor.create(actor)
  return create
}

async function findOneActor(id) {
  const findOne = Actor.findOne({ _id: id })
  return findOne
}

async function findAndUpdateActor(id, updatedActor) {
  const findAndUpdate = Actor.findOneAndUpdate({ _id: id }, updatedActor, {
    new: true,
    runValidators: true,
  })
  return findAndUpdate
}

async function findAndDeleteActor(id) {
  const findAndDelete = Actor.findOneAndDelete({ _id: id })
  return findAndDelete
}

module.exports = {
  findAllActors,
  createAnActor,
  findOneActor,
  findAndUpdateActor,
  findAndDeleteActor,
}
