const express= require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const app = new express();
require('dotenv').config()
require('./DB/connection')
app.use(cors());
app.use(morgan('dev'));
const userRoute = require('./Routes/UserRoute');
const employeeRoute= require('./Routes/EmployeeRoute');
const AdminRoute=require('./Routes/AdminRoute');
app.use('/user', userRoute);
app.use('/employee',employeeRoute);
app.use('/admin',AdminRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => { console.log('server is running on port 3000') })
