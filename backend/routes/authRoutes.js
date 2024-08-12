const express = require("express");
const router = express.Router();

router.post('/login',(req,res)=>{
    res.send("this is login");
    console.log('hello');
    
})

module.exports = router;