const express = require('express');
const User = require('../models/userModel');
const router = express.Router();
 

//signup 
router.post('/signup',async (req,res)=>{
    const {userName,email,password} = req.body;
    try {
        const user = new User({userName,email,password});
        await user.save();
        res.status(201).json({message:"User Created Successfully"});
    } catch (error) {
        res.status(400).json({message:"Error saving User"});
    }
});

//login

router.post('/login',async (req,res) => {
    const {userName,email,password} = req.body;
    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message:"User not found"});
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch) {
            return res.status(400).json({message:"Invalid Password"});
        }

        const token = jwt.sign({ id:user_id},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.json({token});
    } catch (error) {
        res.status(400).json("Error Loggin");
    }
})

module.exports = router
