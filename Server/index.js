const express = require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const fileupload=require('express-fileupload');
const app=express();



mongoose.connect("mongodb+srv://SoumyadipAdak77777:Y0kDnbAnDplxhD6X@cluster0.a7l9d.mongodb.net/classnotes?retryWrites=true&w=majority",{
    useNewUrlParser:true,
useUnifiedTopology: true, 
useFindAndModify:true});




app.use(fileupload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
  }));
app.use(cors());



app.use("/classes",require("./routes/post"));
app.use("/profile",require("./routes/post2"));
app.use("/files",require("./routes/post3"));

// app.get("/",async(req,res)=>{
// // const ss=new Streamsemester({stream:"MCA",semester:1});
// // try{
// // await ss.save();
// res.send("Running");
// res.send({json:"object"});
// // }catch(err){
// // console.log(err);
// // }
// });

const PORT=process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log("Backend Server started on 3001...");
});