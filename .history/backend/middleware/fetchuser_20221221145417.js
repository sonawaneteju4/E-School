var jwt = require("jsonwebtoken");
const JWT_SECRET = "TEJAS";

const fetchuser = (req, res, next) =>{


    //Get User From jwt Token add id to req Object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error : "Please authenticate Valid Token"})
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.admin = data.admin;
        next()
        
    } catch (error) {
        res.status(401).send({error : "Please authenticate Valid Token"})
        
    }
}

module.exports = fetchuser