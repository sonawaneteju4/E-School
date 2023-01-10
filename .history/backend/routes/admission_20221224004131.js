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




module.exports = router;
