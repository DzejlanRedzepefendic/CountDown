const Actor = require('../models/actor')

async function findAllActors() {
  const actors = await Actor.find({})
  return actors
}

async function createAnActor(
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
) {
  const create = Actor.create({
    birthName,
    height,
    pic,
    bio,
    dateOfBorn: { day, month, year },
    country,
    state,
    city,
  })
}

module.exports = {
  findAllActors,
  createAnActor,
}
