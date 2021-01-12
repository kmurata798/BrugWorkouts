var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brug Workouts' });
});

router.get('/programs', function(req, res, next) {
  res.render('programs/programs-show', { title: 'Brug Workouts' });
});

module.exports = router;
