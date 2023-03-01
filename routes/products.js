var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("products route");
});

router.get("/test", (req, res) => {
  res.send("products test route");
});

module.exports = router;
