const mongoose = require('mongoose')
const PTSchema = require('../db/schemas/placesTraveled')

const PlacesTraveled = mongoose.model('PlacesTraveled', PTSchema)

module.exports = PlacesTraveled