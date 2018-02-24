var express = require('express');
var router = express.Router({ mergeParams: true });
const User = require('../models/users')
const PlacesDesired = require('../models/placesDesired')



/* GET home page. */
// router.get('/', function(req, res, next) {
//     const userId = req.params.userId
//   User.findById(req.params.userId)
//   .then((user) => {
//       console.log(user)
//     res.render('placesTraveled/', {
//         places: user.placesTraveled



//     })
// })
// })


// NEW ROUTE for places traveled
router.get('/new', (req, res) => {
    res.render('placesDesired/new', {
        userId: req.params.userId
    })
})


//POST ROUTE TO 
router.post('/', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        console.log(req.body)
        const newplacesDesired = new PlacesDesired({
            state: req.body.state,
            location: req.body.location,
            season: req.body.season,
            image: req.body.image,
            imageone: req.body.imageone,
            imagetwo: req.bodyimagetwo,
            review: req.body.review
        })
        user.placesDesired.push(newplacesDesired)

        return user.save()
    }).then((updatedUser) => {
        console.log(updatedUser)
        res.redirect(`/users/${req.params.userId}`)
    })

})

router.get('/:id/edit', (req, res) => {

    User.findById(req.params.userId).then((user) => {
      const placesDesired = user.placesDesired.id(req.params.id)
      res.render('placesDesired/edit', {
        userId: req.params.userId,
        placesDesired: placesDesired
      })
    })
  })


router.put('/:id', (req,res) => {
User.findByIdAndUpdate(req.params.userId).then((user)=>{
    user.placesdesired.id(req.params.id).update()
    return user.save()
}).then (()=> {
    res.redirect(`/users/${req.params.userId}/placesDesired`)
})
})


//Delete Route
router.delete('/:id', (req, res) => {
User.findById(req.params.userId).then((user)=> {
user.placesDesired.id(req.params.id).remove()
return user.save()
}).then (()=> {
    res.redirect(`/users/${req.params.userId}`)
})

})

  
  
router.get('/:id', (req, res) => {
    User.findById(req.params.id).then((user) => {
        console.log("param.id is", req.params.id)
        console.log("User is", user)
        const newuser = user
        console.log("newuser is", newuser)
        res.render('users/show', {
            newuser: newuser
        })
    })
})

module.exports = router;