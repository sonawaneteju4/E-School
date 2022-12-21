const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const { body, validationResult } = require("express-validator");

// Create User Using Post "api/auth/" .Doesnt Req auth
router.post(
  "/",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password").isLength({ min: 5 }),
  ],
  (req, res) => {
   

    
    res.send(req.body);

    // req.json([])
  }
);
module.exports = router;
