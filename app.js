var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var recordsRouter = require('./routes/records');
const mongoose = require("mongoose");

var app = express();

//Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//DB MiddleWare

const port=9000;
const url= "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true";

mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

//Routes
app.use('/', indexRouter);
app.use('/records',recordsRouter);



module.exports = app;
