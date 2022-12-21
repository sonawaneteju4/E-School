const express = require('express')
const router = express.Router();
const Blog = require("../models/Blog")

router.get('/fetchblog',(req,  res)=>{
    const blog = await Notes.find()
    
    req.json(blog)

})
module.exports = router