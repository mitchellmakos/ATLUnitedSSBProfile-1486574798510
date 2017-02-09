var express = require('express');
var router = express.Router();
var dbOperations = require("../dbOperations.js");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

// API
router.get('/api/register/:email', function(req, res){
    dbOperations.register(req, res);
});

module.exports = router;