var express = require('express');
var router = express.Router();
var socket=require('../socket');

/* GET home page. */
router.get('/', function(req, res, next) {
  socket.Start();
});

module.exports = router;
