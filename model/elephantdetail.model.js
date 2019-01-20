const mongoose = require('mongoose');
// mongodb model for details
const eisdetails = mongoose.Schema({
    elephntname:  String,
    age:Number,
    place:String,
    gender: String,
    type:String,
    details:String,
    imagename:String,
    imageid:String
});


// Export the model
module.exports = mongoose.model('eisdetailschema', eisdetails);