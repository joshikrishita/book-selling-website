const express=require("express")
const app=express()
const {Router}=require("express")
const bookRouter=Router()

//route to see all available books
bookRouter.get("/books/preview",function(req,res){

})

//route to purchase books
bookRouter.post("/books/purchase",function(req,res){

})

module.exports={
    bookRouter:bookRouter
}