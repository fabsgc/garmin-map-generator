var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/tiles', function(req, res, next) {
  res.send({});
});

router.get('/map/:token', function(req, res, next) {
  var token = request.params.token;
  res.render('map', { token: token });
});

router.post('/save', function(req, res, next) {
  data = {}
  res.send(data);
});

module.exports = router;
