const mongoose = require('mongoose');
const 
const BlogSchema = new Schema({
    tittle :{
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