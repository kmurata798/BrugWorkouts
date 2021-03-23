const Program = require('../models/program')
const router = require('express').Router()

router.get('/', function(req, res, next) {
    Program.find(function(err, docs) {
      // var programChunks = [];
      // var chunkSize = 3;
      // console.log("docs:", docs)
      // for(var i = 0; i < docs.length; i += chunkSize) {
      //   programChunks.push(docs.slice(i, i + chunkSize));
      // }
      // console.log('docs:', docs)
      res.render('programs/programs-show', { programs: docs, user:req.user });
    });
});
// I want to display exercises when the user clicks the program
// should i create a new views for exercises? or do everything on programs views instead???

// // Getting all
// router.get('/test', (req, res) => {
//     res.send('Hello World')
// })
// // Getting One
// // '/:id' means this is a parameter: can access using req.params.id to get whatever
// // they pass in after the '/'
// router.get('/:id', (req, res) => {
//     res.send(req.params.id)
// })
// // Creating One
// router.post('/', (req, res) => {
    
// })
// Updating One
// Use 'patch' since we would only update what the user passes us
// Using 'put' would update all of the info, instead of only what we want to change.
// router.patch('/', (req, res) => {
    
// })
// // Deleting One
// router.delete('/:id', (req, res) => {

// })

module.exports = router