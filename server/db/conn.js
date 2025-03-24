const mongoose=require('mongoose')
const express=require('express')
const app=express()
const db = process.env.DATABASE
const port=process.env.PORT
// const port = 8055;
mongoose.connect(db,{
    
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
})
module.exports= port
