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

const newmexico = new PlacesDesired ()
const montreal = new PlacesTraveled ({
    state: "Canada",
    location: "Montreal",
    season: "Winter",
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/18193317_10212874114271946_56398798561668923_o.jpg?oh=8cf8bc91d89b0b4809ca39b197cedd99&oe=5B0E851E",
    imageone: "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/23926214_10214854037088779_6117001922399888762_o.jpg?oh=2ed7bb95f5e7dc000d62f347221f860b&oe=5B0D0759",
    imagetwo: "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/23926254_10214854046969026_1391946007697433743_o.jpg?oh=63bff7065920d25c5a4e4a9972f62c95&oe=5B051F62",
    review: "Montreal is awesome. One of the chillest/safest places to be"


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
    profilepic: 'https://i.imgur.com/8mIyvbw.jpg',
    placesTraveled: [ georgia, canada ],
    placesDesired: [oregon, washington]
})

const owen = new User ({
    firstname: "Owen",
    lastname: "Livingston",
    username: "Owen334",
    profilepic:  'https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/21167552_10155452874212530_7101397401924779131_o.jpg?oh=5297cbf86ce3e60c225b16f1943d3f4f&oe=5B100656'

})

const savanah = new User ({
    firstname: "Savanah",
    lastname: "DeBrosse",
    username: "Savvyy230",
    profilepic:"https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/21728719_10214247145116859_3171370647450555257_o.jpg?oh=d2a8949561a157052604e0d9e85f09c9&oe=5B0C2B30",
    placesTraveled: [montreal]
})

User.remove()
.then(()=> {
        return User.remove()
}).then(()=> {
    return User.insertMany([cameron,owen, savanah])
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
