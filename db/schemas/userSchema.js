const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const PTSchema = require("./placesTraveled")
const PTDschema = require('./placesDesired')

mongoose.Promise = global.Promise 

const UserSchema = new Schema (
    {
       firstname: String,
       lastname: String,
        username: String,
        profilepic: String,
        placesTraveled: [PTSchema],
        placesDesired: [PTDschema]
    }
)

module.exports = UserSchema 