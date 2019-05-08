var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET All available tiles */
router.get('/tiles', function(req, res, next) {
  res.send({});
});

/* GET downloading data for an IMG */
router.get('/map/:token', function(req, res, next) {
  var token = request.params.token;
  var data = {
    'token': token,
    'name' : token + '.img'
  }

  res.send(data);
});

/* POST save a map request */
router.post('/save', function(req, res, next) {
  var data = {}
  res.send(data);
});

module.exports = router;
