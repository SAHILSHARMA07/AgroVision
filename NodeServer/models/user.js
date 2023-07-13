const mongoose = require("mongoose");
const {Schema} = require("mongoose")
const User=new Schema(
  {
      name:{type: String,
        required:true,
             },
      area : {
          type: String,
          required:true,
      },
      email:{
          type: String,
           
          required:true,


      },
      password:{type:String,
     unique:true,
     required:true,
    
    }


  }


)
const UserModel = mongoose.model("UserModel",User);
module.exports= UserModel;