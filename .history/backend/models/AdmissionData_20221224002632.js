const mongoose = require('mongoose');
const {Schema} = mongoose
const AdmissionDataSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
    },
    phone :{
        type : String,
        required : true,
    },
    Gender :{
        type : String,
        required : true,
    },
    Education Status :{
        type : String,
        required : true,
    },
    Date :{
        type : Date,
        default: Date.now
    }



})

module.exports = mongoose.model('admissionData', AdmissionDataSchema)