const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected Succesfully");
        
    } catch (error) {
        console.log("MongoDB Connection failed",error);
        
    }
}

module.exports = connectDB;