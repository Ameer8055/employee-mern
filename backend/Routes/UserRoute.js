const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const userModel = require('../Model/UserData');

const jwt=require('jsonwebtoken');


router.post('/login', async (req, res) => {
    const user = await userModel.findOne({ Email: req.body.Email });
    if (!user) {
         res.status(400).json({ message: "User not found" });
    }

    try {
        if (user.Password === req.body.Password) {
            const payload={Email:user.Email,Password:user.Password};
            const token = jwt.sign(payload, 'secretkey');
            res.status(200).send({ message: "Login Success",token:token});
        } else {
             res.status(400).json({ message: "Invalid Credentials" });
        }
    } catch (error) {
             res.status(500).json({ message: "Invalid Login" });
    }
});




module.exports = router; // Ensure the router is exported
