const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    Name:String,
    Designation:String,
    Salary:Number,
    Department:String,
    Location:String
});
const employee = mongoose.model('employee', employeeSchema);

module.exports= employee;