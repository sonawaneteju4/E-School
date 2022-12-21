const mongoose = require('mongoose');
const {Schema} = mongoose
const BlogSchema = new Schema({
    admin:{
        type: mongoose.Schema.Types.ObjectId,
    },
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