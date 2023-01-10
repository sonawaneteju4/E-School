const mongoose = require('mongoose');
const {Schema} = mongoose
const Admission = new Schema({
    admin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
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

module.exports = mongoose.model('blog', BlogSchema)