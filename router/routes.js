const express = require('express');
const router = express.Router();
const {renderindex, eksempel, login,
surveypage, datapage, renderthanks} = require('../controller/controller');


router.get('/', renderindex);

router.get("/eksempel", eksempel);

router.post("/login", login);

router.get("/survey", surveypage);

router.get("/data", datapage);

router.get("/thankyou", renderthanks);

module.exports=router