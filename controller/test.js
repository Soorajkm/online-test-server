var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
const { getQueService } = require("../Service/testService.js");
const validateToken = require("../common/validateToken.js");
router.get("/get-que", validateToken, async (req, res) => {
  const result = await getQueService();
  res.send(result);
});
module.exports = router;
