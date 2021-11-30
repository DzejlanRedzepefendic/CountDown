async function findAll(collection) {
  return collection.find({})
}

async function create(collection, reqBody) {
  return collection.create(reqBody)
}

async function findOne(collection, id) {
  return collection.findOne({ _id: id })
}

async function findAndUpdate(collection, id, updated) {
  return collection.findOneAndUpdate({ _id: id }, updated, {
    new: true,
    runValidators: true,
  })
}

async function findAndDelete(collection, id) {
  return collection.findOneAndDelete({ _id: id })
}

module.exports = {
  findAll,
  create,
  findOne,
  findAndUpdate,
  findAndDelete,
}
