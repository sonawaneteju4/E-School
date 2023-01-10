const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

//Route-1 Get User  Details Using: Get "api/auth/fetchblog" login not req?/
router.get("/fetchblog", async (req, res) => {
    try {
        const blog = await Blog.find();
        res.json(blog);
        
    } catch (error) {
        console.error(error.message);
      res.status(500).send("some Error Occured");
    }
});

//Route-2 Add Blog  : post "api/auth/addblog" login Req
router.post(
  "/addblog",
  
  [
    body("title", "Enter A Valid title").isLength({ min: 3 }),
    body("description", "Enter A Valid description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
        
    
    const { title, description, author } = req.body;
    //if err or bad req
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const blog = new Blog({
      title,
      description,
      author,
      admin: req.admin.id,
    })
    const savedBlog = await blog.save()

    res.json(savedBlog)
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("some Error Occured");
  }
}
);

module.exports = router;
