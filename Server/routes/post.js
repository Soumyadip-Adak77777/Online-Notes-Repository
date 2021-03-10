var express = require('express');
const router=require("express").Router();
const {Class}=require('../models/Class');


//POST
router.post("/add",(req,res)=>{
    
    const post=new Class(req.body);
    // var file=post.filename;
    // file.mv('public/files'+file.name)
    post.save((err)=>{
        if(err){return res.status(400).json({success:false,err});}
        else{return res.status(200).json({success:true});}
    });
});
//GET
router.get("/",(req,res)=>{
    Class.find().exec((err,posts)=>{
        if(err){return res.status(400).json({success:false,err});}
        else{return res.status(200).json({success:true,posts:posts});}
    });
});
//ANOTHER GET
router.get("/detail/:id", (req,res)=>{

    let id=req.params.id;
    
    Class.findById(id,function(err,posts){
        if(err){
        return res.json({success:false,err});
    }else{
        return res.json({success:true,posts});
    }
    });
});
//PUT
router.put("/update/:id",(req,res)=>{
    Class.findByIdAndUpdate(
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
    Class.findByIdAndRemove(req.params.id).exec((err,deleteItem)=>{
            if(err){
                res.send(err);
            } 
            return res.json(deleteItem);
      
})});


module.exports=router;