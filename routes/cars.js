const express=require('express');

const router=express.Router();

const carCont=require('../controllers/c_controller');

router.get('/cars',carCont.cars);

module.exports=router;



