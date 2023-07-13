const dotenv = require('dotenv')
dotenv.config();

const UserModel=require("./models/user");



const {body,validationResult }=require("express-validator")
const express = require("express");

const cors=require("cors");
const connectToDb= require("./connection");
const bodyparse=require("body-parser");
const { urlencoded } = require('express');
const app = express();
app.use("bodyparse",urlencoded({extended:true}))
connectToDb();

app.use(express.json());

app.use(cors())
app.use("/auth/",require('./routes/authroutes'))




app.listen(process.env.PORT,()=>{
    console.log("server running");
})
