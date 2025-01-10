async function connectDB() {
    try {
      // Use the latest Mongoose connection method (without deprecated options)
      await mongoose.connect('');
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection failed:', error);
      process.exit(1);
    }
  }

module.exports={
    connectDB
};