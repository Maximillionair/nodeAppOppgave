const express = require('express');
const Survey = require("../models/surveyModel");

const renderindex = (req, res) => {
    res.render('index');
};

const surveypage = (req, res) => {
    res.render('survey');
};

const datapage = (req, res) => {
    res.render('data');
};

const renderthanks = (req, res) => {
    res.render('thankyou');
};

const login = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }
    res.status(200).json({ message: "Login request received", username, password });
};


const submitSurvey = async (req, res) => {
    try {
        const {question1, question2, question3, question4, question5} = req.body;

        console.log("Received survey submission:", question1, question2, question3, question4, question5);

        const newSurvey = new Survey({question1, question2, question3, question4, question5});
        await newSurvey.save();

        res.status(201).json({ message: "Survey submitted successfully!" });
    } catch (error) {
        console.error("Error saving survey:", error);
        res.status(500).json({ error: "Error saving survey data." });
    }
};


const getSurveys = async (req, res) => {
    try {
        const surveys = await Survey.find();
        res.status(200).json(surveys);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving survey data." });
    }
};

//Export functions correctly
module.exports = {
    renderindex,
    surveypage,
    datapage,
    renderthanks,
    login,
    submitSurvey,
    getSurveys
};
