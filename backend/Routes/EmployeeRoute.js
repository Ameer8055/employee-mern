const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));

const jwt=require('jsonwebtoken')
function verifytoken(req,res,next){
    let token=req.headers.token;
    try{
    if(!token) throw 'Unauthorized access';
    else{
        let payload=jwt.verify(token,'secretkey');
        if(!payload) throw 'Unauthorized access';
        next()
    }
}  catch(error) {
    console.log(error);

}
}




const employeeModel = require('../Model/EmployeeData');


router.post('/add',verifytoken, async (req, res) => {
    try {
        const item = req.body;
        const data = new employeeModel(item);
        await data.save();
        res.status(201).json({ message: 'Employee Added Successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/update/:id',verifytoken, async (req, res) => {
    try {
        await employeeModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: "Employee updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating employee" })
    }});

router.get('/employeedetails',async(req,res)=>{
    try {
        const employeedetails = await employeeModel.find();
        res.json(employeedetails);
        
    } catch (error) {
        res.status(500).json({message:error.message});
        
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try {
        const employee= await employeeModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Employee deleted successfully"});
    } catch (error) {
        res.status(500).send({message:error.message})
        
    }
})

    module.exports = router;