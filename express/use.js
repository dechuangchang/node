var express = require('express');

var app = express();

app.use('/assets', express.static('public'));
app.use(function(req, res, next){
  console.log(req.query.a)
  next()
});
app.use(function(req, res, next){
  console.log(req.query.b)
  next()
});
app.get('/', function(req, res, next) {
  res.send(req.query);
});
app.listen(3000);
console.log('listening to port 3000');