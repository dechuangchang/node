var express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.get('/tmp/:title/:message', function(req, res) {
  res.render('index', { title: req.params.title, message: req.params.message});
});
app.listen(3001);
console.log('listening to port 3001');