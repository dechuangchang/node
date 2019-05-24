var express = require('express');
var bodyParser = require('body-parser')
var fs = require('fs')
var app = express();
var todoController = require('./controllers/todoController');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

app.use('/assets',express.static('./assets'));

todoController(app);

app.get('/', function(req, res) {
  res.render('todo', { title: req.params.title, message: req.params.message});
});
app.listen(3000);

console.log('You are listening to port 3000');