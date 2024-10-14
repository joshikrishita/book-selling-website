const express=require("express");
const app=express();
const mongoose=require("mongoose")
const{userRouter}=require("./routes/user");
const{bookRouter}=require("./routes/book");
const{adminRouter}=require("./routes/admin");

app.use(express.json());

app.use("/api/v1/user",userRouter);
app.use("/api/v1/books",bookRouter);
app.use("/api/v1/admin",adminRouter)

async function main(){
    await mongoose.connect("mongodb+srv://joshikrishita:krishu1804@cluster0.mil13.mongodb.net/");
    app.listen(3001);
    console.log("running successfully")
}
main()