require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
// const mongoose = require('mongoose');

// const mongoString = process.env.DATABASE_URL
// var MongoClient = require("mongodb").MongoClient;  

// mongoose.connect(mongoString);
// const database = mongoose.connection;

// database.on('error', (error) => {
//   console.log(error)
// })

// database.once('connected', () => {
//   console.log('Database Connected');
// })

var indexRouter = require('./routes/index');
var patientRouter = require('./routes/patient');
var consultRouter = require('./routes/consult');


var app = express();
// app.get("/users", function() {  
//   MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {  
//     if (err) next  
//     db  
//       .collection("users")  
//       .find()  
//       .toArray(function(err, result) {  
//         if (err) throw err;  

//         res.json(result)  
//       });  
//   });  
// });

// app.listen(3000,function(){  
//     console.log('Express app start on port 3000')  
// });

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/patient', patientRouter);
app.use('/api/consult', consultRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
