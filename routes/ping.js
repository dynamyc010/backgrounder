var express = require('express');
var router = express.Router();

/* GET ping pong page. */
router.get('/', function(req, res, next) {
    res.send("Pong!");
});

module.exports = router;