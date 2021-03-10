const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const PostSchema1=new Schema({
    
   email:{
        type:String,
        required:true,
    },
    strsem:{
        type:String,
        required:true,
    },
    
});

module.exports={
    Profile:mongoose.model("profile",PostSchema1),
};
