var express = require('express');
var router = express.Router();
const User = require('../models/users')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
})


// router.get('/new' ,(req, res) => {
//   res.render('users/new')
// })

// router.post('user/index', (req, res) => {
//   let newUser = new User({
//       firstname: req.body.firstname,
//       lastname: req.body.lastname,
//       username: req.body.username
//   })
//   newUser.save().then((savedUser) => {
//       res.redirect(`/users/${savedUser_id}`)

//   }).catch((err) => {
//       conosle.log(err)
//   })
// })

module.exports = router;
