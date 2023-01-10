const mongoose = require('mongoose');
const {Schema} = mongoose
const Media = new Schema({
    title:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
     :{
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

module.exports = mongoose.model('media', Media)