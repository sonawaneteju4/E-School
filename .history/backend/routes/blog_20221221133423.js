const express = require('express')
const router = express.Router();
const Blog = require("../")

router.get('/',(req,  res)=>{
  
    
    req.json([])

})
module.exports = router