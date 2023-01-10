const express = require("express");
const router = express.Router();
const Update = require("../models/Update");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

//Route-1 Get User  Details Using: Get "api/auth/fetchblog" login not req?/
router.get("/fetchupdate", async (req, res) => {
    try {
        const update = await Update.find().sort({$natural:-1});
        res.json(update);
        
    } catch (error) {
        console.error(error.message);
      res.status(500).send("some Error Occured");
    }
});

//Route-2 Add Blog  : post "api/auth/addblog" login Req
router.post(
  "/addupdate",
  fetchuser,
  [
    body("title", "Enter A Valid title").isLength({ min: 3 }),
    body("description", "Enter A Valid description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
        
    
    const { title, description, link, remark } = req.body;
    //if err or bad req
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const update = new Update({
      title,
      description,
      link,
      remark,
      admin: req.admin.id,
    })
    const savedUpdate = await Update.save()

    res.json(savedUpdate)
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("some Error Occured");
  }
}
);

module.exports = router;
