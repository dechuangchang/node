var express = require('express');
var app = express();

var indexRouter = require('./routers/index');
var usersRouter = require('./routers/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000);
console.log('listening to port 3000');