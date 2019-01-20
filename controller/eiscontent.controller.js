const crypto = require('crypto');
const multer= require('multer');
const GridFS= require('multer-gridfs-storage');
const Grid= require('gridfs-stream');
var path= require('path');
const mongoose = require('mongoose');
const Detailschema = require('../model/elephantdetail.model');

//connection sting to mlab
let dev_db_url = 'mongodb://nipuna:a12345@ds033400.mlab.com:33400/user';
const conn=mongoose.createConnection(dev_db_url);
let gfs;

// connection opening for upload image
conn.once('open',()=> {
    gfs=Grid(conn.db,mongoose.mongo);
    gfs.collection('elephantdetails');
    
})

//grid fs midlware function
const storage = new GridFS({
  
    url: dev_db_url,
    file: (req, file) => {
      console.log(file);
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'elephantdetails'
          };
          resolve(fileInfo);
        });
      });
    }
  });
const upload = multer({ storage }).single('File');

// upload the image to the mlab using 
exports.imageupload =  function(req,res){
//using middleware function
  upload(req,res, (err) => {
    if(err){
         res.json({error_code:1,err_desc:err});
         return;
    }
    res.json({file: req.file});
});
};

//save  details of elephant
exports.savedetails=function (req,res) {
  const detail = new Detailschema(
    {
      elephntname:req.body.elephntname,
      age:parseInt(req.body.age,10),
      place:req.body.place,
      gender:req.body.gender,
      type:req.body.type,
      details:req.body.details,
      imagename:req.body.imagename,
      imageid:req.body.imageid
    }
);
console.log(detail);
detail.save().then(response => {
res.status(200).json({
    response:response
});
});
};

//get all details of all images
exports.allimg=function (req,res) {
  let filesData = [];
  let count = 0;
  gfs.collection('elephantdetails'); // set the collection to look up into
  
      gfs.files.find().toArray((err, files) => {
        // Check if files
        if (!files || files.length === 0) {
          res.json({files:0});
        } else {
          files.map(file => {
            if (
              file.contentType === 'image/jpeg' ||
              file.contentType === 'image/png'
            ) {
              file.isImage = true;
            } else {
              file.isImage = false;
            }
          });
          res.json({ files: files });
        }
      });
};

//get images one by one the view
exports.getimage=function (req,res) {
  gfs.collection('elephantdetails'); 

  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }

    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image'
      });
    }
  });
};

//delete image 
exports.deleteimage=function (req,res){
  gfs.remove({ _id: req.params.id, root: 'elephantdetails' }, (err, gridStore) => {
    if (err) {
      return res.status(404).json({ err: err });
    }
    res.status(200).json({delete:true});
  });
}
//get details by id
exports.getdetailsbyid=function (req,res){
  Detailschema.findOne({_id:req.params.id}).exec().then(
    result => {
        res.status(200).json({result})
    })
    .catch(err=>console.log(err));
}
//get details by image id
exports.getdetailsbyimageid=function (req,res){
  Detailschema.findOne({imageid:req.params.id}).exec().then(
    result => {
        res.status(200).json({result})
    })
    .catch(err=>console.log(err));
}
//update elephant details
exports.editDetails=function (req,res){
  Detailschema.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, result) {
    if (err) return next(err);
    res.status(200).json({result});
   });
}
//delete details
exports.deleteDetails=function (req,res){
  Detailschema.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.status(200).json({result:true});
});
}

exports.searchDatailsbyname=function (req,res){
  Detailschema.find({elephntname:{$regex: ".*" + req.params.details + ".*"}}).exec().then(
    result=>{
    res.status(200).json({result:result});
})
}
exports.searchDatailsbycharacteristic=function (req,res){
  Detailschema.find({details: {$regex: ".*" + req.params.details + ".*"}}).exec().then(
    result=>{
    res.status(200).json({result:result});
})
}

