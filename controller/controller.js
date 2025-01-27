const express = require('express');
const router = express.Router();


const renderindex = (req, res, next)=>{
    res.render('index');
};

const surveypage = (req, res, next)=>{
    res.render('survey');
};

const datapage = (req, res, next)=>{
    res.render('data');
}

const renderthanks = (req, res, next)=>{
    res.render('thankyou');
};

const login = (req, res)=>{
    const { username, password } = req.body;

    // Check if the required fields are present
    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    // For now, respond with the received data
    // Later, you'll add database checks here
    res.status(200).json({
        message: "Login request received",
        username,
        password,
    });
};

const eksempel = (req, res,)=>{
    res.json({"message": "hello world"});
}

const form = (req, res)=>{
    res.json({})
}

module.exports={
    renderindex,
    eksempel,
    form,
    login,
    surveypage,
    datapage,
    renderthanks
};

