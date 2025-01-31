const express = require('express');
const router = express.Router();
const { 
    renderindex, 
    surveypage, 
    datapage, 
    renderthanks, 
    login, 
    submitSurvey,
    getSurveys 
} = require('../controller/controller');

// Define routes
router.get('/', renderindex);

router.get('/survey', surveypage);

router.get('/data', datapage);

router.get('/thank-you', renderthanks);

router.post('/login', login);

router.post('/submit-survey', submitSurvey);

router.get('/surveys', getSurveys);

module.exports = router;
