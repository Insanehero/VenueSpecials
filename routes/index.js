var express = require('express');
var router = express.Router();
var Venue = require('../models/Venue')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var lat = req.body.coords.latitude;
  var long = req.body.coords.longitude;

  Venue.find(function(err, venues) {

  });
});

module.exports = router;
