const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const { body, validationResult } = require("express-validator");

// Create User Using Post "api/auth/" .Doesnt Req auth
router.post(
  "/createadmin",
  [
    body("email", "Enter A Valid Email").isEmail(),
    body("name", "Enter A Valid Name").isLength({ min: 5 }),
    body("password", "Password Must Be 5 Char").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //If Err Return Bad Req
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Create user - Check Email Alredy Exist
    try {
      let admin = await Admin.findOne({ email: req.body.email });
      if (admin) {
        return res
          .status(400)
          .json({ error: "Sorry a User With this email alrerdy Exists" });
      }
      admin = await Admin.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      // .then(admin  => res.json(admin))
      // .catch(err => {console.log(err)
      // res.json({error: "Please Enter A Unique Value For Email", message : err.message})})
      res.json(admin);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some Error Occured");
    }
  }
);
module.exports = router;
