const mongoose = require("mongoose")

const surveySchema = new mongoose.Schema({
    question1: String,
    question2: String,
    question3: String,
    question4: String,
    question5: String,
    submittedAt: { type: Date, default: Date.now },
});
const Survey = mongoose.model("Survey", surveySchema, "answers");


module.exports = Survey;
