var jwt = require("jsonwebtoken");
const fetchuser = (req, res, next) =>{


    //Get User From jwt Token add id to req Object
    const token = req.header('auth')
}

module.exports = fetchuser