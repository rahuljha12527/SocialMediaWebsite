const express=require('express');

const homeController=require('../controllers/home_controller')
const router=express.Router();

console.log('router loaded');

router.get('/',homeController.home);
// router.get('/home',homeController.car);

module.exports=router;
