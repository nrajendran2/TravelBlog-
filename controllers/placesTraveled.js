var express = require('express');
var router = express.Router({ mergeParams: true });
const User = require('../models/users')
const PlacesTraveled = require('../models/placesTraveled')



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
    res.render('placesTraveled/new', {
        userId: req.params.userId
    })
})


//POST ROUTE TO 
router.post('/', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        console.log(req.body)
        const newplacesTraveled = new PlacesTraveled({
            state: req.body.state,
            location: req.body.location,
            season: req.body.season,
            image: req.body.image,
            image1: req.body.image1,
            image2: req.bodyimagd2,
            review: req.body.review
        })
        user.placesTraveled.push(newplacesTraveled)


        return user.save()
    }).then((updatedUser) => {
        console.log(updatedUser)
        res.redirect(`/users/${req.params.userId}`)
    })

})

router.get('/:id/edit', (req, res) => {

    User.findById(req.params.userId).then((user) => {
      const placesTraveled = user.placesTraveled.id(req.params.id)
      res.render('placesTraveled/edit', {
        userId: req.params.userId,
        placesTraveled: placesTraveled
      })
    })
  })


router.patch('/:id', (req,res) => {
User.findByIdAndUpdate(req.params.userId).then((user)=>{
    user.placestraveled.id(req.params.id).update()
    return user.save()
}).then (()=> {
    res.redirect(`/users/${req.params.userId}/placesTraveled`)
})
})


//Delete Route
router.delete('/:id', (req, res) => {
User.findById(req.params.userId).then((user)=> {
user.placesTraveled.id(req.params.id).remove()
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