var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
    res.status(200).json({
        "Welcome API v1": "WORKS!",
    });
});

module.exports = router;