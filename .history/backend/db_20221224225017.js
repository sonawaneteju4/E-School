const mongoose = require("mongoose");


const mongoURI = "mongodb+srv://localhost:27017/eshool"

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected To Mongo Succesfully")
    })
}

module.exports = connectToMongo ;