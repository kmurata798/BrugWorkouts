const Exercise = require('../models/exercise')
const router = require('express').Router()

router.get('/', function(req, res, next) {
    Exercise.find(function(err, docs) {
      var programChunks = [];
      var chunkSize = 3;
      console.log("docs:", docs)
      for(var i = 0; i < docs.length; i += chunkSize) {
        programChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('exercises/exercises-show', { title: 'Brug Workouts', programs: programChunks, user:req.user });
    });
});

module.exports = router