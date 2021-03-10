const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const PostSchema2=new Schema({
    
    picspath:String,
});

 module.exports={
    File:mongoose.model("file",PostSchema2),
};