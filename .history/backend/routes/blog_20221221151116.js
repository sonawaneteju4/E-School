const express = require('express')
const router = express.Router();
const Blog = require("../models/Blog")


//Route-1 Get User  Details Using: Get "api/auth/fetchblog" login Req ?/
router.get('/fetchblog', async(req,  res)=>{
    const blog = await Notes.find()
    req.json(blog)

})

//Route-2 Add Blog  : post "api/auth/addblog" login Req
router.get('/addblog', async(req,  res)=>{
    const blog = await Notes.find()
    req.json(blog)

})


module.exports = router