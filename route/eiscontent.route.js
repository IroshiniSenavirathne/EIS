const express = require('express');
const router = express.Router();
const eis_content = require('../controller/eiscontent.controller');

//uplad image route
router.post('/images', eis_content.imageupload);
//save details
router.post('/savedetails', eis_content.savedetails);
//get all image
router.get('/allimg', eis_content.allimg);
//get image by image name
router.get('/getimage/:filename', eis_content.getimage);
//deteteimageby id
router.delete('/delete/:id', eis_content.deleteimage);
//get details by details by id
router.get('/getdetails/:id', eis_content.getdetailsbyid);
//get details by details id
router.get('/getdetailsbyimg/:id', eis_content.getdetailsbyimageid);
//update details
router.put('/updatedetails/:id', eis_content.editDetails);
//delete details of elephant
router.delete('/deletedetails/:id', eis_content.deleteDetails);
//search details by name
router.get('/searchdtailsbyname/:details', eis_content.searchDatailsbyname);
//search details by characteristcs
router.get('/searchcharactristic/:details', eis_content.searchDatailsbycharacteristic);
module.exports = router;