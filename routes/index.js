var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  // Check if there are extra tokens if you aren't logged in
  if (!req.user) {
    res.clearCookie('api_token')
  }
  res.render('index', { title: 'Brug Workouts', user: req.user });
});

module.exports = router;
