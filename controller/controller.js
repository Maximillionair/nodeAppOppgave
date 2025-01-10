const express = require('express');
const router = express.Router();

const renderindex = ('/index', (req, res, next)=>{
    res.render('index');
});

module.exports={
    renderindex
};

