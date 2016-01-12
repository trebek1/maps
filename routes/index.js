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

router.get('/bing', function(req, res, next) {
  res.render('bing');
});

router.get('/openlayers', function(req, res, next) {
  res.render('openlayers');
});

router.get('/leaflet', function(req, res, next) {
  res.render('leaflet');
});

router.get('/gheatmap', function(req, res, next) {
  res.render('gheatmap');
});

router.get('/gpolygons', function(req, res, next) {
  res.render('gpolygons');
});

router.get('/olheatmap', function(req, res, next) {
  res.render('olheatmap');
});

router.get('/olmarkeroverlay', function(req, res, next) {
  res.render('olmarkeroverlay');
});

router.get('/mapboxheat', function(req, res, next) {
  res.render('mapboxheat');
});

router.get('/lheatmap', function(req, res, next) {
  res.render('lheatmap');
});


module.exports = router;
