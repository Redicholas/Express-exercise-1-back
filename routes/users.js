var express = require("express");
var router = express.Router();

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jack" },
  { id: 4, name: "Alice" },
  { id: 5, name: "Bob" },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(users);
});

router.post("/", (req, res, next) => {
  let newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  console.log(newUser);

  res.json(newUser);
});

router.get("/test", (req, res) => {
  res.send("test route");
});

module.exports = router;
