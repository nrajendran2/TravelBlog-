
/* GET users listing. */
var express = require('express');
var router = express.Router();
const User = require('../models/users')


/* GET home page. */
router.get('/', function(req, res, next) {
  User.find().then((users) => {

    res.render('users/index', {
        users: users
    })
})
})



router.get('/new' ,(req, res) => {
  res.render('users/new')
})

router.post('/', (req, res) => {
  const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      profilepic:req.body.profilepic
  })
  newUser.save().then((savedUser) => {

      res.redirect(`/users/${savedUser._id}`)

  }).catch((err) => {
      conosle.log(err)
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
