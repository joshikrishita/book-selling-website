const express=require("express");
const app=express();
const {Router}=require("express");
const jwt=require("jsonwebtoken")
const{JWT_ADMIN_PASSWORD}=require("../config")
const { adminModel } = require("../db");
const adminRouter=Router()
const{adminMiddleware}=require("../middleware/admin")

//route for admin signup
adminRouter.post("/signup",async function(res,req){
    const{email,password,firstName,lastName}=req.body

    await adminModel.create({
        email,
        password,
        firstName,
        lastName
    })

    res.json({
        message:"singup successfully"
    })
})

//route for admin signin
adminRouter.post("/signin",async function(req,res){
    const {email,password}=req.body;
    const user=await adminModel.findOne({
        email:email,
        password:password
    });
    if(user){
        const token= jwt.sign({
            id:user._id
           },JWT_ADMIN_PASSWORD);
           res.json({
            token:token
           })
        }else{
            res.status(403).json({
                message:"Incorrect Credentials"
             })
        }
})

//route to add a book by admin
adminRouter.post("/book",adminMiddleware,function(req,res){
    
})

//route to delete a book by admin
adminRouter.delete("/book",adminMiddleware,function(req,res){
    
})

//route to update a book by admin
adminRouter.put("/book",adminMiddleware,function(req,res){
    
})

//route to see all his books
adminRouter.get("/book",adminMiddleware,function(req,res){
    
})

module.exports={
    adminRouter:adminRouter
}