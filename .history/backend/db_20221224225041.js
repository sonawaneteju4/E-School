const mongoose = require("mongoose");


const mongoURI = "mongodb+srv://sonawanetejas:"

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected To Mongo Succesfully")
    })
}

module.exports = connectToMongo ;