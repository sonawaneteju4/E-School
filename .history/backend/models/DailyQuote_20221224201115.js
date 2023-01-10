
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
    by :{
        type : String,
        default : true,
    },
    Date :{
        type : Date,
        default: Date.now
    }



})

module.exports = mongoose.model('quote', QuoteSchema)