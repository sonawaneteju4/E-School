const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "TEJAS";

//Route-1 Create User Using Post "api/auth/" .Doesnt Req auth
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
    // Check Email Alredy Exist
    try {
      let admin = await Admin.findOne({ email: req.body.email });
      if (admin) {
        return res
          .status(400)
          .json({ error: "Sorry a User With this email alrerdy Exists" });
      }

      const salt = await bcrypt.genSalt(10);
      secPass = await bcrypt.hash(req.body.password, salt);

      //Create a new Admin
      admin = await Admin.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        admin: {
          id: admin.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);

      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some Error Occured");
    }
  }
);

//Route-2 Auth User Using: Post "api/auth/" .Np log in
router.post(
  "/login",
  [
    body("email", "Enter A Valid Email").isEmail(),
    body("password", "Password Can Not Be Blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(400).json({ errors: "Enter Correct Details!" });
      }

      const passwordCompare = await bcrypt.compare(password, admin.password);
      if (!passwordCompare) {
        return res.status(400).json({ errors: "Enter Correct Details!!" });
      }

      const data = {
        admin: {
          id: admin.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      success
      res.json({success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });

//Route-3 Get User  Details Using: Post "api/auth/getuser" login Req
router.post(
  "/getuser",fetchuser, 
  async (req, res) => {
try {
  adminId = req.admin.id
  const admin = await Admin.findById(adminId).select("-password")
  res.send(admin)
} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server Error");
}
  })
module.exports = router;
