const mongoose = require('mongoose')
const Schema = mongoose.Schema 

mongoose.Promise = global.Promise 

const UserSchema = new Schema (
    {
       firstname: String,
       lastname: String,
        username: String

    }
)

module.exports = UserSchema 