const mongoose = require("mongoose");

// User Schema & Model
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
});
const User = mongoose.model("User", UserSchema);

const surveySchema = new mongoose.Schema({
    question1: String,
    question2: String,
    question3: String,
    question4: String,
    question5: String,
    submittedAt: { type: Date, default: Date.now },
});
const Survey = mongoose.model("Survey", surveySchema, "answers");


module.exports = { User, Survey };
