const express = require('express')
const router = express.Router();
const Blog = require("../models/Blog")
const { body, validationResult } = require("express-validator");
const fetchuser = require('../middleware/fetchuser');


//Route-1 Get User  Details Using: Get "api/auth/fetchblog" login not req?/
router.get('/fetchblog', async(req,  res)=>{
    const blog = await Notes.find()
    req.json(blog)

})

//Route-2 Add Blog  : post "api/auth/addblog" login Req
router.post('/addblog',fetchuser, [
    body("title", "Enter A Valid Email").isLength({min : 3}),
    body("descr", "Enter A Valid Name").isLength({ min: 5 }),
    body("password", "Password Must Be 5 Char").isLength({ min: 5 }),
] async(req,  res)=>{
    
    
    req.json(blog)

})


module.exports = router