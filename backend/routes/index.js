var express = require('express');
var router = express.Router();
var socket=require('../socket');

/* GET home page. */
router.get('/', function(req, res, next) {

});

router.get('/test', function(req, res, next) {
  console.log('qqq');
});

module.exports = router;
