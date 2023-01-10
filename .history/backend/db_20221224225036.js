const mongoose = require("mongoose");


const mongoURI = "mongodb+srv://sonawaneteju"

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected To Mongo Succesfully")
    })
}

module.exports = connectToMongo ;