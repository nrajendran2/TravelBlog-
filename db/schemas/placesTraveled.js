const mongoose = require('mongoose')
const Schema = mongoose.Schema 

mongoose.Promise = global.Promise 

const PTSchema = new Schema (
    {
       state: String,
       location: String,
        season: String,
        image: String,
        imageone: String,
        imagetwo: String,
        review: String
    }
)

module.exports = PTSchema 