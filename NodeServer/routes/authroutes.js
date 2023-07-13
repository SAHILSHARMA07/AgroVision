const express = require("express");
const UserModel=require("../models/user.js");
const router =express.Router();


const userRegisterHandle=require("../controllers/Signup")
const userLoginHandle=require("../controllers/Login")
const {body,validationResult }=require("express-validator")
router.get("/",(req,res)=>{
    res.json({name:"haj"});
})
router.post("/userSignup",[ body('name').exists(),body('name').isLength({ min: 3 }),
body('email').isEmail(),
body('area').exists(),body('area').isLength({min:2}),
body('password').isLength({ min: 5 })],userRegisterHandle);

router.post("/userLogin",[ 
body('email').isEmail(),
body('area').exists(),body('area').isLength({min:2}),
body('password').isLength({ min: 5 })],userLoginHandle);

module.exports=router;