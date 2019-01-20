const mongoose = require('mongoose');


const userrole = mongoose.Schema({
    role:String
});


// Export the model
module.exports = mongoose.model('usertype', userrole,'usertype');