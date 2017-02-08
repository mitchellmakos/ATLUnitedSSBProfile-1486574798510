var express = require('express');
var router = express.Router();
var dbOperations = require("../dbOperations.js");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

// API
router.get('/db/getSSB_Profile', function(req, res){
    dbOperations.getSSB_Profile(req, res);
});

module.exports = router;