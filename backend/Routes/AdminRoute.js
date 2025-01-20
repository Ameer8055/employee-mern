const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

const jwt=require('jsonwebtoken')

const adminModel = require('../Model/AdminData');

router.post('/login',async(req,res)=>{
    const admin = await adminModel.findOne({Username:req.body.Email});
        if(!admin){
            return res.status(400).json({message:"User not found"})
        }
        try {
            if(admin.Password===req.body.Password)
            {
                const payload={Username:admin.Email,Password:admin.Password};
                const token = jwt.sign(payload, 'secretkey'); 
                res.status(200).send({message:"Welcome Admin",token:token})
            }
            else {
                res.status(401).json({message:"Invalid Password"})
                }
            
        } catch (error) {
            res.status(400).json({message:"Invalid Login"})      
        }

        
   
})



module.exports = router; // Ensure the router is exported
