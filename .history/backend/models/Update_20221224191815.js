const mongoose = require('mongoose');
const {Schema} = mongoose
const UpdateSchema = new Schema({
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
    remark :{
        type : String,
        required : true,
    }
    Date :{
        type : Date,
        default: Date.now
    }



})

module.exports = mongoose.model('update', UpdateSchema)