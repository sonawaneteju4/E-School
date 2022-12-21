const { default: userEvent } = require('@testing-library/user-event');
const mongoose = require('mongoose');
const {Schema} = mongoose;
const AdminSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        unique: true
    },
    password :{
        type : String,
        required : true
    },
    Date :{
        type : Date,
        default: Date.now
    }
})

const Admin = module.exports = mongoose.model('admin', AdminSchema);
Admin.createIndexes()
module.exports = Admin