const mongoose = require('mongoose')
const PTDschema = require('../db/schemas/placesDesired')

const PlacesDesired = mongoose.model('PlacesDesired', PTDschema)

module.exports = PlacesDesired