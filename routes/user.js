const express=require("express");
const app=express();
const {Router}=require("express")
const userRouter=Router();
const {userMiddleware}=require("../middleware/user")
const {userModel,bookModel,purchaseModel}=require("../db")


//route for signup
userRouter.post("/signup",async function(res,req){
    const{email,password,firstName,lastName}=req.body

    await userModel.create({
        email,
        password,
        firstName,
        lastName
    })

    res.json({
        message:"singup successfully"
    })
})


//route for signin
userRouter.post("/signin",async function(res,req){
    const {email,password}=req.body;
    const user=await userModel.findOne({
        email:email,
        password:password
    });
    if(user){
        const token= jwt.sign({
            id:user._id
           },JWT_USER_PASSWORD);
           res.json({
            token:token
           })
        }else{
            res.status(403).json({
                message:"Incorrect Credentials"
             })
        }
})


//sees all the purchased books
userRouter.get("/purchased",userMiddleware,function(res,req){
    
})

module.exports={
    userRouter:userRouter
}