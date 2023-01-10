const mongoose = require("mongoose");


const mongoURI = "mongodb+srv://sonawanetejas:TejasSonawane"

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected To Mongo Succesfully")
    })
}

module.exports = connectToMongo ;