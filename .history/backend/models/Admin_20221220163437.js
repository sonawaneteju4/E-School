const mongoose = require('mongoose');
const AdminSchema = new Schema({
    name :{
        type : String
        required : true
    }
})