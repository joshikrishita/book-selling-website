const mongoose=require("mongoose")

const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;
 
const userSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String

})

const adminSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String,
    
})

const bookSchema=new Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId:ObjectId
})

const purchaseSchema=new Schema({
    bookId:ObjectId,
    userId:ObjectId
})

const userModel=mongoose.model("user",userSchema)
const bookModel=mongoose.model("book",bookSchema)
const adminModel=mongoose.model("admin",adminSchema)
const purchaseModel=mongoose.model("purchase",purchaseSchema)

module.exports={
    userModel,
    bookModel,
    adminModel,
    purchaseModel
}