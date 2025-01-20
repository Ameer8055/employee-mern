const mongoose= require('mongoose');

const adminSchema = mongoose.Schema({
    Username:String,
    Password:String
})

const admin = mongoose.model('admin', adminSchema)

module.exports=admin;