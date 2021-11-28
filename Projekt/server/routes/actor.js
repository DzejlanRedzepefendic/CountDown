const express = require('express')
const router = express.Router()
const { getAllActors, createActor } = require('../controllers/actor')

router.route('/').get(getAllActors).post(createActor)

module.exports = router
