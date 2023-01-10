
const mongoose = require('mongoose');
const {Schema} = mongoose
const QuoteSchema = new Schema({
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
        default : "/update",
    },
    remark :{
        type : String,
        required : true,
    },
    Date :{
        type : Date,
        default: Date.now
    }



})

module.exports = mongoose.model('quote', QuoteSchema)