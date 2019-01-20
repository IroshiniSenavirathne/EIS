const Userschema = require('../model/user.model');
const  usertype= require('../model/userrole.model');

//Simple version, without validation or sanitation

exports.user_create = function (req, res,next) {
//get user type and save user
    usertype.findOne({role:req.body.usertype}).select('_id').exec().then(
        result => { 
            const user = new Userschema(
                {
                    fullname:req.body.fullname,
                    username:req.body.username,
                    email:req.body.email,
                    password:req.body.password,
                    roleid:result['_id']
                    
                }
            );
           user.save().then(response => {
            res.status(200).json({
                response:response
            });
          }).catch(err=> console.log(err));
        }).catch(err=> console.log(err));  
    
};
 //get dtails for login   
exports.user_details = function (req,res,next) {
    Userschema.find({email:req.body.email,password:req.body.password}).exec().then(
        result => {
            res.status(200).json({result})
        })
        .catch(err=>console.log(err));
};
//get userrole id by name
exports.user_roleid = function (req,res,next) {
    usertype.findOne({role:req.params.role}).select('_id').exec().then(
        result => {
            res.status(200).json({result})
        })
        .catch(err=>console.log(err));

};
//get all avilable users
exports.getallusers = function (req,res,next) {
    Userschema.find().exec().then(
        result => {
            res.status(200).json({result:result})
        })
        .catch(err=>console.log(err));

};
//uodate user 
exports.updateuserrole = function (req,res,next) {
    Userschema.findByIdAndUpdate(req.params.id, {$set: req.body}).exec().then(
        result => {
            res.status(200).json({result:true})
        })
        .catch(err=>console.log(err));

};

//delete user
exports.deleteuser = function (req,res,next) {
    Userschema.findByIdAndRemove(req.params.id).exec().then(
        result => {
            res.status(200).json({result:true})
        })
        .catch(err=>console.log(err));

};

     
