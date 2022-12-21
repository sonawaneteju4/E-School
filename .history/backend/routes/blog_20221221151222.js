const express = require('express')
const router = express.Router();
const Blog = require("../models/Blog")
const { body, validationResult } = require("express-validator");


//Route-1 Get User  Details Using: Get "api/auth/fetchblog" login not req?/
router.get('/fetchblog', async(req,  res)=>{
    const blog = await Notes.find()
    req.json(blog)

})

//Route-2 Add Blog  : post "api/auth/addblog" login Req
router.post('/addblog', async(req,  res)=>{
    
    
    req.json(blog)

})


module.exports = router