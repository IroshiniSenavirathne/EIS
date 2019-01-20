const mongoose = require('mongoose');


const usersSchema = mongoose.Schema({
    fullname:  String,
    username:String,
    email: String,
    password:String,
    roleid:String
});


// Export the model
module.exports = mongoose.model('Userschema', usersSchema);