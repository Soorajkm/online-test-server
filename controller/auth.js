var express = require("express");
var router = express.Router();

var jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const { uid, pwd } = req.body;
  if (uid == "nit" && pwd == "nit@123") {
    var token = jwt.sign(req.body, "my-token");
    res.status(200).send({ token });
  } else {
    res.status(200).send({ message: "Please check entered uid or password." });
  }
});
module.exports = router;
