
const express = require("express");
const UserModel=require("../models/user.js");
const router =express.Router();
const cors=require('cors');
const bodyparse=require("body-parser");

router.use(cors())

router.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")

  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
  next();
});
const bcrypt= require("bcrypt");


const {validationResult }=require("express-validator")
async function userRegisterHandle (req,res){
    const errors = validationResult(req);


    if(!errors.isEmpty())
  {   
      res.json({status :"please fill appropriate values"});
  }
  else{
    const {name,area,password,email} = req.body;
 
   let us=await UserModel.find({email:email.toLowerCase()});
   console.log(us);
    if(!us.length==0){
      res.json({status :"please fill appropriate values"});
    }
    else{
      try{  console.log(req.body)
        // const {name,area,password,email} = req.body
        console.log(name);
       
      
          const salt = await bcrypt.genSalt(10);
          const hashedPass=await bcrypt.hash(password,salt);
          // var email1="";
          //  for(let i=0;i<email.length;i++)
          //  {
          //    if(email[i]>='A' && email[i]<='Z')
          //    {
          //      email1+=email[i].toLowerCase();
          //    }
          //    else
          //    {
          //      email1+=email[i];
          //    }
          //  }
          //  console.log(email1);
          const updated={name:name,area:area,password:hashedPass,email:email}
          
         const user =  new UserModel(updated);
         await user.save();
      
           res.json({status:"enter"});
    
        
    }
    catch(error){
        res.status(400).json({status:"Internal error"});
    }
    }



  }
}

module.exports = userRegisterHandle;