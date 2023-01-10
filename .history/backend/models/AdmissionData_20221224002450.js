const mongoose = require('mongoose');
const {Schema} = mongoose
const AdmissionDataSchema = new Schema({
    title :{
        type : String,
        required : true
    },
    description :{
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