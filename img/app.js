var express = require('express');

var app = express();




app.set('view engine', 'ejs');

app.use(express.static('./'));


app.listen(3000);

console.log('You are listening to port 3000');