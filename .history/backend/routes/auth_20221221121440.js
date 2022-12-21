const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const { body, validationResult } = require("express-validator");

// Create User Using Post "api/auth/" .Doesnt Req auth
router.post(
  "/",
  [
    body("email", "Enter A Valid Email").isEmail(),
    body("name", "Enter A Valid Name").isLength({ min: 5 }),
    body("password", "Password Must Be 5 Char").isLength({ min: 5 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      username: req.body.name,
      password: req.body.password,
    }).then(user => res.json(user));

    res.send(req.body);

    // req.json([])
  }
);
module.exports = router;
