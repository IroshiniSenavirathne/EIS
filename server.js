var express =require('express');
var path= require('path');
var bodyParser=require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');

var port=3000;
var app=express();
app.use(cors());
//set app routing
const user = require('./route/user.route');
const eis = require('./route/eiscontent.route'); // Imports routes for the user

//set mongodb connection
let dev_db_url = 'mongodb://nipuna:a12345@ds033400.mlab.com:33400/user';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//set routs
app.use(bodyParser.json({limit:'50mb',extended: true}));
app.use(bodyParser.urlencoded({limit:'50mb',extended: true}));
app.use('/user', user);
app.use('/content',eis)
//port stating
app.listen(port, () => {
    console.log('Express server listening on port ' + port);
});