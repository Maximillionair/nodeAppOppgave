const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
  });
  
  // Create a Mongoose model for users
 const User = mongoose.model('User', UserSchema);

 module.exports=User;