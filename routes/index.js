var express = require('express');
var router = express.Router();
var Program = require('../models/program')

/* GET home page. */
router.get('/', function(req, res, next) {
  // Check if there are extra tokens if you aren't logged in
  if (!req.user) {
    res.clearCookie('api_token')
  }
  res.render('index', { title: 'Brug Workouts', user: req.user });
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

router.get('/programs/crafty', function(req, res, next) {
  res.render('programs/crafty');
});

module.exports = router;
