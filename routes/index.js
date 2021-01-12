var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var Program = require('../models/program')

var csrfProtection = csrf();
// Tell express that all routes in this router should be protected by CSRF
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brug Workouts' });
});

router.get('/programs', function(req, res, next) {
  Program.find(function(err, docs) {
    var programChunks = [];
    var chunkSize = 3;
    for(var i = 0; i < docs.length; i += chunkSize) {
      programChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('programs/programs-show', { title: 'Brug Workouts', programs: programChunks });
  });
});
router.get('/user/signup', function(req, res, next) {
  var messages = req.flash('error');
  res.render('/user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/user/signup', passport.authenticate('local.signup', {
  successRedircet: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true
}));

router.get('/user/profile', function(req, res, next) {
  res.render('user/profile');
})

module.exports = router;
