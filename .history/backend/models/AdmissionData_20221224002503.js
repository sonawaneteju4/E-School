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
    author :{
        type : String,
        default: "Student"
    },
    Date :{
        type : Date,
        default: Date.now
    }



})

module.exports = mongoose.model('admissionData', AdmissionDataSchema)