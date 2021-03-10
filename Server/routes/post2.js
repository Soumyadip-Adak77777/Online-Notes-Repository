const router=require("express").Router();
const { Link } = require("react-router-dom");
const {Profile}=require('../models/Profile');
//POST
router.post("/add",(req,res)=>{
    const post=new Profile(req.body);
    post.save((err)=>{
        if(err){return res.status(400).json({success:false,err});}
        else{return res.status(200).json({success:true});}
    });
});
//GET
router.get("/",(req,res)=>{
    Profile.find().exec((err,posts)=>{
        if(err){return res.status(400).json({success:false,err});}
        else{return res.status(200).json({success:true,posts:posts});}
    });
});
//ANOTHER GET
router.get("/detail/:id", (req,res)=>{

    let id=req.params.id;
    
    Profile.findById(id,function(err,posts){
        if(err){
        return res.json({success:false,err});
    }else{
        return res.json({success:true,posts});
    }
    });
});
//PUT
router.put("/update/:id",(req,res)=>{
    Profile.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body,
        },
        (err,posts)=>{
            if(err){return res.status(400).json({success:false,err});}
            else{return res.status(200).json({success:true});}
        });
});
//DELETE
router.delete("/delete/:id",(req,res)=>{
    Profile.findByIdAndRemove(req.params.id).exec((err,deleteItem)=>{
            if(err){
                res.send(err);
            } 
            return res.json(deleteItem);
      
})});

//DOWNLOAD

// router.get("/download/filename",(req,res)=>{
//    link.setA
// });

module.exports=router;