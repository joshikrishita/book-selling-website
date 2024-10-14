const express=require("express")
const app=express()

//route to see all available books
app.get("/books/preview",function(req,res){

})

//route to purchase books
app.post("/books/purchase",function(req,res){

})

app.listen(3001);