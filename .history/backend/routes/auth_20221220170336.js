const express = require('express')
const router = express.Router();

router.get('/',(req,  res)=>{
  

    // Create User Using Post "api/auth/" .Doesnt Req auth
    
    req.json([])

})
module.exports = router