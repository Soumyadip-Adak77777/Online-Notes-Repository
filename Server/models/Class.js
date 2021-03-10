const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const PostSchema=new Schema({
    
    strsem:{
        type:String,
        required:true,
    },
    subcode:{
        type:String,
        required:true,
    },
    filename:{
        type:String,
        required:true,
    },
});

module.exports={
    Class:mongoose.model("class",PostSchema),
};
