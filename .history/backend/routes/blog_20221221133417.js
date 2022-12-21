const express = require('express')
const router = express.Router();
const Blog = require(../m)

router.get('/',(req,  res)=>{
  
    
    req.json([])

})
module.exports = router