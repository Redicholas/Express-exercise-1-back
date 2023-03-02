var express = require("express");
var router = express.Router();

let users = [
  { id: 1, name: "John", password: "Johnpw" },
  { id: 2, name: "Jane", password: "janepw" },
  { id: 3, name: "Jack", password: "Jackpw" },
  { id: 4, name: "Alice", password: "Alicepw" },
  { id: 5, name: "Bob", password: "Bobpw" },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(users);
});

router.post("/login", (req, res, next) => {
  let user = req.body;
  console.log("backend user: " + JSON.stringify(user));
  let foundUser = users.find(
    (u) => u.name === user.name && u.password === user.password
  );
  if (user.name === foundUser.name && user.password === foundUser.password) {
    console.log("Success");
  }
  // if (foundUser) {
  //   console.log("found user: " + JSON.stringify(foundUser));

  //   res.json(foundUser);
  else {
    res.status(404).json({ message: "User not found" });
  }
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
