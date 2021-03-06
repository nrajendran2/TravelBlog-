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
            imageone: req.body.imageone,
            imagetwo: req.bodyimagetwo,
            review: req.body.review
        })
        user.placesTraveled.push(newplacesTraveled)


        return user.save()
    }).then((updatedUser) => {
        console.log(updatedUser)
        res.redirect(`/users/${req.params.userId}`)
    })

})

router.get('/:placesTraveledId/edit', (req, res) => {

    User.findById(req.params.userId).then((user) => {
        const placesTraveled = req.params.placesTraveledId
        res.render('placesTraveled/edit', {
            userId: req.params.userId,
            placesTraveled: placesTraveled
        })
    })
})


router.patch('/:id', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        console.log(req.body)
        const traveled = user.placesTraveled.id(req.params.id)
        traveled.state = req.body.state
        traveled.location = req.body.location
        traveled.season = req.body.season
        traveled.image = req.body.image
        traveled.imageone = req.body.imageone
        traveled.imagetwo = req.body.imagetwo
        traveled.imagethree= req.body.imagethree
        traveled.review = req.body.review
        return user.save()
    }).then(() => {
        res.redirect(`/users/${req.params.userId}`)
    })
    })


//Delete Route
router.delete('/:id', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        user.placesTraveled.id(req.params.id).remove()
        return user.save()
    }).then(() => {
        res.redirect(`/users/${req.params.userId}`)
    })

})



// router.get('/:id', (req, res) => {
//     User.findById(req.params.id).then((user) => {
//         console.log("param.id is", req.params.id)
//         console.log("User is", user)
//         const newuser = user
//         console.log("newuser is", newuser)
//         res.render('users/show', {
//             newuser: newuser
//         })
//     })
// })

module.exports = router;