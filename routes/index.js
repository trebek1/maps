var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/gmap', function(req, res, next) {
  res.render('gmap');
});

router.get('/mbox', function(req, res, next) {
  res.render('mbox');
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

router.get('/mboxplane', function(req, res, next) {
  res.render('mboxplane');
});

router.get('/gstyles', function(req, res, next) {
  res.render('gstyles');
});

router.get('/mboxplanefly', function(req, res, next) {
  res.render('mboxplanefly');
});

module.exports = router;
