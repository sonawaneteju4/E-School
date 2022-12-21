const mongoose = require('mongoose');
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
        default:
    },
    Date :{
        type : Date,
        default: Date.now
    }



})

module.exports = mongoose.model('admin', AdminSchema)