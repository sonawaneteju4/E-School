
const mongoose = require('mongoose');
const {Schema} = mongoose
const QuoteSchema = new Schema({
    admin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    quote :{
        type : String,
        required : true
    },
     :{
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