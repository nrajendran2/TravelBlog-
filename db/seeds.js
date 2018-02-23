require('dotenv').config()
const User = require('../models/users')
const PlacesTraveled = require('../models/placesTraveled')
const PlacesDesired = require('../models/placesDesired')
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

const georgia = new PlacesTraveled ({
    state: "Georgia"
})

const oregon = new PlacesDesired ({
    state: "Oregon",
    location:"Blue Crater Lake",
    image: "Blue Crater Lake",
    review: "Lemme go"
})

const washington = new PlacesDesired ({
    state: "washington",
    location: "Seattle",
    image: "asdfa", 
    review: "So good soo soo good "
})

const canada = new PlacesTraveled ({
    state: "idk elsewhere",
    location: "Vancouver",
    image: "https://www.google.com/imgres?imgurl=https://www.hellobc.com/getmedia/43fd04b5-28b5-4685-8dab-4d74eed6cf6d/2-7086-Vancouver.jpg.aspx&imgrefurl=https://www.hellobc.com/vancouver.aspx&h=530&w=990&tbnid=jGABnpsGrzW4zM:&tbnh=164&tbnw=307&usg=__csibg_IWvlHMG2Ctwtf86pC32BU%3D&vet=1&docid=F-cnMWZU-TSutM",
    review: 'It was good'
})

const cameron = new User ({
    firstname: "Cameron",
    lastname: "Gunter",
    username: "CamtheMan2.0",
    placesTraveled: [ georgia, canada ],
    placesDesired: [oregon, washington]
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
