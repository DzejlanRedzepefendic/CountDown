const express = require('express')
const router = express.Router()
const {
  getAllActors,
  createActor,
  getActor,
  updateActor,
  deleteActor,
} = require('../controllers/actor')

router.route('/').get(getAllActors).post(createActor)
router.route('/:id').get(getActor).patch(updateActor).delete(deleteActor)

module.exports = router
