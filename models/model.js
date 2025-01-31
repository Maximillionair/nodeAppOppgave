const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
  });
  
  // Create a Mongoose model for users
const User = mongoose.model('User', UserSchema);

const surveySchema = new mongoose.Schema({
  question1: String,
  question2: String,
  question3: String,
  question4: String,
  question5: String,
  submittedAt: { type: Date, default: Date.now },
});

module.exports=User, surveySchema;