var express = require('express');
var router = express.Router();



var Program = require('../models/program')



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

module.exports = router;
