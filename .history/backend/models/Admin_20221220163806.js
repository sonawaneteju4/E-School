const mongoose = require('mongoose');
const AdminSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        unique: true
    },
    password :{
        type : String,
        required : true
    },
    Date :{
        type : Date,
        default: Date.now
    }



})

module.exports = mongoose.model('admin')