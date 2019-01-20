const express = require('express');
const router = express.Router();
const user_controller = require('../controller/user.controller');
//get login details
router.post('/login', user_controller.user_details);
// get user role
router.get('/usertype/:role', user_controller.user_roleid);
//rester user
router.post('/register',user_controller.user_create);
//get all users
router.get('/getallusers', user_controller.getallusers);
//edit userrole
router.put('/editrole/:id',user_controller.updateuserrole);
//delete user
router.put('/delete/:id',user_controller.deleteuser);
module.exports = router;