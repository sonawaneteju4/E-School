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
        required : true,
    },
    category :{
        type : String,
        required : true,
    },
    subCategory :{
        type : String,
         required : true,
    },
    coustomLink :{
        type : String,
        default: "Na",
    },
    Date :{
        type : Date,
        default: Date.now
    }



})

module.exports = mongoose.model('media', Media)