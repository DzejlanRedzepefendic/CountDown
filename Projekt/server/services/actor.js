const Actor = require('../models/actor')
const {
  findAll,
  create,
  findOne,
  findAndUpdate,
  findAndDelete,
} = require('../utils/db/dbcrud')
async function findAllActors() {
  return findAll(Actor)
}

async function createAnActor(actor) {
  return create(Actor, actor)
}

async function findOneActor(id) {
  return findOne(Actor, id)
}

async function findAndUpdateActor(id, updatedActor) {
  return findAndUpdate(Actor, id, updatedActor)
}

async function findAndDeleteActor(id) {
  return findAndDelete(Actor, id)
}

module.exports = {
  findAllActors,
  createAnActor,
  findOneActor,
  findAndUpdateActor,
  findAndDeleteActor,
}
