const mongoose = require('mongoose');
const AdminSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        unq
    },
    password :{
        type : String,
        required : true
    },
    Date :{
        type : Date,
        default: Date.now
    },



})