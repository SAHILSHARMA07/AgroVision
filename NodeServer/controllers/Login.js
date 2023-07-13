
const express = require("express");
const UserModel=require("../models/user.js");
const router =express.Router();
const bodyparse=require("body-parser");

const bcrypt= require("bcrypt");

const {validationResult }=require("express-validator");
const { default: mongoose } = require("mongoose");
async function userLoginHandle (req,res){
    const errors = validationResult(req);
    if(!errors.isEmpty())
  {
      res.json({error :"please fill appropriate values"});
  }
  else{
try{  
  console.log("ye")
      const {area,email,password} = req.body
      // var email1="";
      // for(let i=0;i<email.length;i++)
      // {
      //   if(email[i]>='A' && email[i]<='Z')
      //   {
      //     email1+=email[i].toLowerCase();
      //   }
      //   else
      //   {
      //     email1+=email[i];
      //   }
      // }

 
      const user =await UserModel.find({email:email});
      //  console.log(user)
      //  console.log(user.length)
       if(user.length==1){
         console.log("yes")
         console.log(user[0].name);
       
        const comp=await bcrypt.compare(password,user[0].password);
       res.json({status:comp,name:user[0].name,area:user[0].area}) 
       }
    else
    {
        res.json({status:false})
    }
    

  }
  catch(error){
    console.log("catch")
      res.status(400).json({error:"Internal error"});
  }

  }
}

module.exports = userLoginHandle;