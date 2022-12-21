const express = require('express')
const router = express.Router();
const Admin = require('../models/Admin')



  // Create User Using Post "api/auth/" .Doesnt Req auth
router.get('/',(req,  res)=>{
    console.log(req)

    // req.json([])

})
module.exports = router