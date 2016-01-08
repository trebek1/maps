var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/gmap', function(req, res, next) {
  res.render('gmaps');
});

router.get('/mapbox', function(req, res, next) {
  res.render('mapbox');
});

router.get('/cartodb', function(req, res, next) {
  res.render('cartodb');
});

router.get('/openlayers', function(req, res, next) {
  res.render('openlayers');
});

router.get('/mapzen', function(req, res, next) {
  res.render('mapzen');
});

module.exports = router;
