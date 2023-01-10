const express = require("express");
const router = express.Router();
const AdmissionData = require("../models/AdmissionData");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");


//Route-1 Get User  Details Using: Get "api/auth/fetchblog" login not req?/
router.get("/admission", async (req, res) => {
    try {
      const admission = await AdmissionData.find().sort({ $natural: -1 });
      res.json(admission);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some Error Occured");
    }
  });


  //Route-2 Add Blog  : post "api/auth/addblog" login Req
router.post(
    "/postmedia",
    [
      body("phone", "Enter A Valid Number").isLength({ min: 10 }),
      body("email", "Enter A Valid description").isLength({ min: 5 }),
    ],
    async (req, res) => {
      try {
        const { name, email, phone, gender, education, subject ,college ,status } =
          req.body;
        //if err or bad req
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const admission = new AdmissionData({
          title,
          description,
          coustomLink,
          subCategory,
          category,
          link,
          
        });
        const savedMedia = await media.save();
  
        res.json(savedMedia);
      } catch (error) {
        console.error(error.message);
        console.log(error)
        res.status(500).send("some Error Occured");
      }
    }
  );



module.exports = router;
