var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/gmap', function(req, res, next) {
  res.render('GMaps');
});

router.get('/mapbox', function(req, res, next) {
  res.render('MapBox');
});


module.exports = router;
