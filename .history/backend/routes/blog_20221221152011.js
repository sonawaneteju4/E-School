const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

//Route-1 Get User  Details Using: Get "api/auth/fetchblog" login not req?/
router.get("/fetchblog", async (req, res) => {
    try {
        const blog = await Notes.find();
        req.json(blog);
        
    } catch (error) {
        
    }
});

//Route-2 Add Blog  : post "api/auth/addblog" login Req
router.post(
  "/addblog",
  fetchuser,
  [
    body("title", "Enter A Valid title").isLength({ min: 3 }),
    body("description", "Enter A Valid description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const { title, description, author } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const blog = new Blog({
      title,
      description,
      author,
      admin: req.admin.id,
    });
    const savedBlog = await blog.save()

    req.json(savedBlog);
  }
);

module.exports = router;
