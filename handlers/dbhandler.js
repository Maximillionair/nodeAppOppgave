const mongoose = require("mongoose");

async function connectDB() {
    try {

      mongoose.connection.once("open", () => {
        console.log("MongoDB connected successfully!");
    });

      await mongoose.connect('mongodb://10.10.1.114:27017/survey');
      console.log('Connected to MongoDB');

    } catch (error) {
      console.error('MongoDB connection failed:', error);
      process.exit(1);
    }
  }

module.exports={
    connectDB
};