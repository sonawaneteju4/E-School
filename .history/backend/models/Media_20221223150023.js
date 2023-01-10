const mongoose = require('mongoose');
const {Schema} = mongoose
const Media = new Schema({
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
    link :{
        type : String,
        default: "Student"
    },
    category :{
        type : String,
        default: "Student"
    },
    subCategory :{
        type : Date,
        default: Date.now
    }



})

module.exports = mongoose.model('media', Media)