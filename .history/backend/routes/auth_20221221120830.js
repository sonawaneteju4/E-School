const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const { body, validationResult } = require('express-validator');

// Create User Using Post "api/auth/" .Doesnt Req auth
  router.post("/", [
    body()
  ] ,(req, res) => {
  console.log(req.body);
  const user = Admin(req.body);
  user.save();
  res.send(req.body);

  // req.json([])
});
module.exports = router;

