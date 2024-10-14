const express=require("express");
const app=express();

//route for admin signup
app.post("/admin/signup",function(req,res){

})

//route for admin signin
app.post("/admin/signin",function(req,res){
    
})

//route to add a book by admin
app.post("/admin/book",function(req,res){
    
})

//route to delete a book by admin
app.delete("/admin/book",function(req,res){
    
})

//route to update a book by admin
app.put("/admin/book",function(req,res){
    
})

//route to see all his books
app.get("/admin/book",function(req,res){
    
})
app.listen(3001);