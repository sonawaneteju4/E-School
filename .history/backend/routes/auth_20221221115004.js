const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");

// Create User Using Post "api/auth/" .Doesnt Req auth
  router.get("/", (req, res) => {
  console.log(req.body);
  const admin = Admin(req.body);
  user.save();
  res.send("hello");

  // req.json([])
});
module.exports = router;
