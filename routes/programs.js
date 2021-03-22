const express = require('express')
const router = express.Router()
var Program = require('../models/program')

router.get('/', function(req, res, next) {
    Program.find(function(err, docs) {
      var programChunks = [];
      var chunkSize = 3;
      for(var i = 0; i < docs.length; i += chunkSize) {
        programChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('programs/programs-show', { title: 'Brug Workouts', programs: programChunks, user:req.user });
    });
});

router.get('/crafty', function(req, res, next) {
    res.render('programs/crafty');
  });
// Getting all
router.get('/test', (req, res) => {
    res.send('Hello World')
})
// Getting One
// '/:id' means this is a parameter: can access using req.params.id to get whatever
// they pass in after the '/'
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
// Creating One
router.post('/', (req, res) => {
    
})
// Updating One
// Use 'patch' since we would only update what the user passes us
// Using 'put' would update all of the info, instead of only what we want to change.
router.patch('/', (req, res) => {
    
})
// Deleting One
router.delete('/:id', (req, res) => {

})

module.exports = router