var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser= require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var models = require('./models');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var itemsRouter = require('./routes/items');
var app = express();

app.use(cors()); // This was from Darrin
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/items', itemsRouter);

models.sequelize.sync().then(function() {
    console.log("DB Sync'd up")
  });
  

module.exports = app;
