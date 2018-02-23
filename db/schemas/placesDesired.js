const mongoose = require('mongoose')
const Schema = mongoose.Schema 

mongoose.Promise = global.Promise 

const PTDschema = new Schema (
    {
       state: String,
       location: String,
        season: String,
        image: String,
        imageone: String,
        imagetwo:String,
        reason: String
    }
)

module.exports = PTDschema 