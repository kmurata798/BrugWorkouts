const Exercise = require('../models/exercise')
const router = require('express').Router()

// router.get('/', function(req, res, next) {
//     Exercise.find(function(err, docs) {
//       var programChunks = [];
//       var chunkSize = 3;
//       console.log("docs:", docs)
//       for(var i = 0; i < docs.length; i += chunkSize) {
//         programChunks.push(docs.slice(i, i + chunkSize));
//       }
//       res.render('exercises/exercises-show', { title: 'Brug Workouts', programs: programChunks, user:req.user });
//     });
// });

// Display all exercises for a program
router.get('/:title', function(req, res, next) {
  Exercise.find({Program: req.params.title}, function(err, docs) {
    // console.log('docs:', docs)
    res.render('exercises/exercises-show', { exercises: docs, user:req.user });
  });
});

router.get('/single/:id', function(req, res, next) {
  Exercise.findById(req.params.id, function(err, docs) {
    // console.log('docs:', docs)
    res.render('exercises/exercises-single', { exercises: docs, user:req.user });
  });
});

module.exports = router