const express = require('express');
const router = express.Router();
const {renderindex, eksempel, login} = require('../controller/controller');


router.get('/', renderindex);

router.get("/eksempel", eksempel);

router.post("/login", login);

module.exports=router