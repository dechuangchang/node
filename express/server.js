var express = require('express');

var app = express();

app.get('/', function(req, res) {
  // res.send("this is the homepagedddd");
  console.log(req)
  var responseObject = '123clear';
    res.send(responseObject);
});

app.listen(3000);
console.log('listening to port 3000');