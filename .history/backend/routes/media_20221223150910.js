const express = require("express");
const router = express.Router();
const Media = require("../models/Media");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

//Route-1 Get User  Details Using: Get "api/auth/fetchblog" login not req?/
router.get("/fet", async (req, res) => {
    try {
        const blog = await Blog.find().sort({$natural:-1});
        res.json(blog);
        
    } catch (error) {
        console.error(error.message);
      res.status(500).send("some Error Occured");
    }
});
