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

const barcelona = new PlacesTraveled ({
    state: "Spain",
    location: "Barcelona",
    season: "Summer",
    image: "http://www.spain.info/export/sites/spaininfo/comun/carrusel-recursos/cataluna/barcelona-000037111798-istock.jpg_369272544.jpg",
    imageone:'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/20800137_3336647291398_2821615874713008770_n.jpg?oh=54d31d7c8ef02c6015f959c33340b0d6&oe=5B427A68',
    imagetwo: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/12400963_2785582674772_2474865289087727765_n.jpg?oh=061ef0ce771016e99c66e50e0b48edf8&oe=5B4B1E37",
    review: "Spain is awesome. One of the chillest/safest places to be"

})


const monaco = new PlacesDesired ({
    state: "France",
    location:"Monaco",
    season: "Summer",
    image: "https://www.kirkerholidays.com/media/image-cache/e2324f30-3cb6-43f6-bff0-8ebeeffea3f8/1920-765-1-1923-1282/1484156064-monaco.jpg",
    imageone:"https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/003/371/original/4de5637c1a81b881785ee7e3ee1045f0/french-riviera-tour-monaco-french-riviera-2014.jpg",
    imagetwo:"https://www.yachtcharterfleet.com/resources/images/section-headers/monaco-grand-prix-yacht-chartering.jpg",
    reason: "Monaco Grand Prix is one the most historic races in the world, and Lewis Hamilton is a stud"
})



const newmexico = new PlacesDesired ({
    state: "New Mexico",
    location: "Albequrque",
    season: "Fall",
    image: "https://i.ytimg.com/vi/HBkHEoDRm5o/hqdefault.jpg",
    imageone:"http://www.thelifeofluxury.com/images/albuquerque_international_balloon_fiesta_1.jpg",
    imagetwo: "https://leisurevans.com/wp-content/uploads/2016/10/Albuquerque_International_Balloon_Fiesta_2013_Art_Gimbel-24.jpg",
    reason: "The New Mexico Hot Airballoon Fesitval is one of the most famous in the world"
})

const greece = new PlacesDesired ({
    state: "Greece",
    location: "Mynkonos",
    season: "Fall",
    image: "http://i.dailymail.co.uk/i/pix/2017/10/28/13/45C47D9F00000578-5026565-image-a-12_1509192259303.jpg",
    imageone:"http://images.kuoni.co.uk/73/greco-philia-hotel-boutique-mykonos-40115647-1502983983-ImageGalleryLightboxLarge.jpg",
    imagetwo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5J-p-shh2MnWWbDpOXVa2RFHV7TrkBXv44Dko0vMoShE7kG9EbA",
    reason: "The New Mexico Hot Airballoon Fesitval is one of the most famous in the world"
})


const montreal = new PlacesTraveled ({
    state: "Canada",
    location: "Montreal",
    season: "Winter",
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/18193317_10212874114271946_56398798561668923_o.jpg?oh=8cf8bc91d89b0b4809ca39b197cedd99&oe=5B0E851E",
    imageone: "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/23926214_10214854037088779_6117001922399888762_o.jpg?oh=2ed7bb95f5e7dc000d62f347221f860b&oe=5B0D0759",
    imagetwo: "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/23926254_10214854046969026_1391946007697433743_o.jpg?oh=63bff7065920d25c5a4e4a9972f62c95&oe=5B051F62",
    review: "Montreal is awesome. One of the chillest/safest places to be"

})

const colombia = new PlacesTraveled ({
    state: "Colombia",
    location: "Medellin",
    image: "http://intelligenttravel.nationalgeographic.com/files/2011/10/medellin1.jpg",
    imageone:'https://media.boalingua.ch/images/_kolumbien_medellin_header.jpg',
    imagetwo: "http://s1.1zoom.net/big0/158/419123-svetik.jpg",
    review: 'It was a little dangerous, but the views were gorgeous'
})

const mona = new User ({
    firstname: "Mona",
    lastname: "Abdulrab",
    username: "MoShopTillDeath",
    profilepic: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/20621913_3329633156049_8809284005641118952_n.jpg?oh=76d1e1765c8b0576315dac58747d9947&oe=5B430EF6',
    placesTraveled: [colombia],
    placesDesired: [greece]
})

const stephen = new User ({
    firstname: "Stephen",
    lastname: "Mcgill",
    username: "SMcGill24",
    profilepic:  'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/25442869_3553053821071_700445569915381568_n.jpg?oh=e61d351e03e50a7146e67bb133363665&oe=5B1777F6',
    placesTraveled: [barcelona],
    placesDesired: [monaco]
})

const savanah = new User ({
    firstname: "Savanah",
    lastname: "DeBrosse",
    username: "Savvyy230",
    profilepic:"https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/21728719_10214247145116859_3171370647450555257_o.jpg?oh=d2a8949561a157052604e0d9e85f09c9&oe=5B0C2B30",
    placesTraveled: [montreal],
    placesDesired: [newmexico]
})

User.remove()
.then(()=> {
        return User.remove()
}).then(()=> {
    return User.insertMany([mona,stephen,savanah])
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
