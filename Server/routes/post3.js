const express = require("express");

const upload=require('express-fileupload')
const router = express.Router();
var http=require('http').Server(router);
const {File}=require('../models/File');
 const bodyParser=require("body-parser");
// var multer = require('multer');
var path = require('path');
// const formidable=require('formidable')
var mime=require('mime')
var fs=require('fs')

router.use(express.static('uploads'))

router.post('/uploadnotes',(req,res)=>{
   if(req.files){
    console.log(req.files)
    var file=req.files.file
    var filename=file.name;
    console.log(filename)
    file.mv('../Server/uploads/'+filename,function(err){
        if(err){
            res.send(err)
        }else
        {
            console.log(res.filename)
            
        }
    })
   }
    
})
 
// router.get('/',(req,res)=>{
    
    // var file = fs.readFileSync(__dirname+'../../uploads/Koala.jpg', 'binary');

    // res.setHeader('Content-Length', file.length);
    // res.write(file, 'binary');
    // res.end();
//     var filename=path.basename(file);
//     var mimetype=mime.lookup(file);

//     res.setHeader('Content-disposition','attachment;filename='+filename);
//     res.setHeader('Content-type',mimetype);
//     var filestream=fs.createReadStream(file);
//     filestream.pipe(res);
//    console.log(filename)
//     res.download(file)
    
//  })
//  res.sendFile(__dirname+'../../uploads/'+file);



// var upload = multer({storage:storage})
// const maxSize=1*1024*1024;

// var Storage = multer.diskStorage({
//     destination:function(req,file,cb){cb(null,"./public/uploads/")
//     console.warn(this.destination);
// },
//     filename:(req,file,cb)=>{
//         cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    
//     },
//     onError: function(err, next){
//         console.log("error", err);
//         next(err);
//     }});
//     var upload = multer({ storage: Storage, limits: {fileSize:maxSize}}).single('file');
// // var upload = multer({ dest: './public/uploads/' })
// router.post('/uploadnotes', upload, function (req, res) {
// //    req.file is the name of your file in the form above, here 'uploaded_file'
// //    req.body will hold the text fields, if there were any 
//    console.log(req.files)
   
// });




// router.get('/uploadnotes',upload,(req,res)=>{
//     res.send(req.body)
// })

// router.post('/uploadnotes',function(req,res){
//    console.log(req.body.name)
//     // res.redirect('http://localhost:3000/')
// });

// router.get('/download/:id',(req,res)=>{
//      File.find({_id:req.params.id},(err,data)=>{
//          if(err){
//              console.log(err)
//          } 
//          else{
//             var path= __dirname+'/public/'+data[0].picspath;
//             res.download(path);
//          }
//      })
// })



module.exports = router;