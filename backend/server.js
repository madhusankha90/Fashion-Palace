const express = require("express");
const app = express();

const router = require('./routes/authRoutes')

const port = process.env.PORT || 5000;

app.use('/api',router)

app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})