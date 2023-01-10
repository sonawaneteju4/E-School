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
    gender :{
        type : String,
        required : true,
    },
    education  :{
        type : String,
        required : true,
    },
    subject  :{
        type : String,
        required : true,
    },
    status  :{
        type : String,
        default : "true",
    },
    Date :{
        type : Date,
        default: Date.now
    }



})

module.exports = mongoose.model('admissionData', AdmissionDataSchema)