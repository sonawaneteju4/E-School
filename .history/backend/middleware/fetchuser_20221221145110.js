var jwt = require("jsonwebtoken");
const fetchuser = (req, res, next) =>{


    //Get User From jwt Token add id to req Object
    const token = req.header('auth-token');
    if(!token){
        res.status(401)
    }
    next()
}

module.exports = fetchuser