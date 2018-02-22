require('dotenv').config()
const User = require('../models/users')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection

mongoose.connection.once('open', ()=> {
    console.log("Mongoose on Seeds has connected to the database")
})

mongoose.connection.on('error', (error) => {
    console.error(`MongoDB connection error!!! ${error} `)
  process.exit(-1)
})

const cameron = new User ({
    firstname: "Cameron",
    lastname: "Gunter",
    username: "CamtheMan2.0"
})

const owen = new User ({
    firstname: "Owen",
    lastname: "Livingston",
    username: "Owen334"

})

User.remove()
.then(()=> {
        return User.remove()
}).then(()=> {
    return User.insertMany([cameron,owen])
}).then(()=> {
    console.log("saved users")
    db.close()
}).catch((err)=> {
    console.log(err)
})


// Soda.remove()
// .then(() => {
//     return Company.remove()
//     }).then(() => {
//         return Company.insertMany([coke, pepsi])
//     }).then(() => {
//     console.log("Saved Successfully")
//     db.close()
//     }).catch(()=> {
//         conosle.log(err)
//     })


// User.remove()
// .then(()=> {
//         return owen.save()
// }).catch((error)=> {
//     console.log(error)
// })
