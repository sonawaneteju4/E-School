const express = require('express')
const router = express.Router();
const Blog = require("../models/Blog")

router.get('/feat',(req,  res)=>{
  
    
    req.json([])

})
module.exports = router