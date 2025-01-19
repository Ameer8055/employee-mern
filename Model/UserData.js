const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
    Phone:String
});
const user = mongoose.model('user', userSchema);

module.exports= user;