var express = require('express');
var router = express.Router({ mergeParams: true });
const User = require('../models/users')
const placesTraveled = require('../models/placesTraveled')



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



router.get('/new', (req, res) => {
    res.render('placesTraveled/new', {
        userId: req.params.userId
    })
})



router.post('/', (req, res) => {
    User.findById(req.params.userId).then((user) => {
        const newplacesTraveled = new PlacesTraved({
            state: req.body.state,
            location: req.body.location,
            season: req.body.seaso,
            image: req.body.image,
            image1: req.body.image1,
            image2: req.bodyimagd2,
            review: req.body.review
        })
        user.placestraveled.push(newplacesTraveled)


        return placesTraveled.save()
    }).then((updatedUser) => {
        res.redirect(`/users/${req.params.userID}`)
    })

})

newUser.save().then((savedUser) => {

    res.redirect(`/users/${savedUser._id}`)

}).catch((err) => {
    conosle.log(err)
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