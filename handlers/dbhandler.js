const mongoose = require("mongoose");

async function connectDB() {
    try {
      await mongoose.connect('mongodb://10.12.10.170:27017/local');
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection failed:', error);
      process.exit(1);
    }
  }

module.exports={
    connectDB
};