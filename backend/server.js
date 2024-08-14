const express = require("express");
const app = express();

const authRoutes = require('./routes/authRoutes')
const connectDB = require('./db')

require('dotenv').config()


const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use('/api/auth',authRoutes)

app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})