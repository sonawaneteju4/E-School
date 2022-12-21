const express = require('express')
const router = express.Router();
const Blog = require("../models/Blog")


//Route-3 Get User  Details Using: Post "api/auth/getuser" login Req

router.get('/fetchblog', async(req,  res)=>{
    const blog = await Notes.find({})
    
    req.json(blog)

})
module.exports = router