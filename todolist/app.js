var express = require('express');

var fs = require('fs')
var app = express();
var todoController = require('./controllers/todoController');



app.set('view engine', 'ejs');

app.use(express.static('./'));

todoController(app);


app.listen(3000);

console.log('You are listening to port 3000');