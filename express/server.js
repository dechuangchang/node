var express = require('express');
var bodyParser = require('body-parser')
var fs = require('fs')
var app = express();

var multer = require('multer');

var createFolder = function(folder) {
    try {
        fs.accessSync(folder);
    } catch (e) {
        fs.mkdirSync(folder);
    }
};

var uploadFolder = './upload/';

createFolder(uploadFolder);

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, uploadFolder);
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage });


// app.get('/', function(req, res) {
//   // res.send("this is the homepagedddd");
//   console.log(req)
//   var responseObject = '123clear';
//     res.send(responseObject);
// });


// app.get('/api/:id?', function(req, res) {
//   console.dir(req.params)
//   var responseObject = 'api/id='+req.params.id;
//   res.send(responseObject);
// });

// api/admin?a=2
// app.get('/api/admin', function(req, res) {
//   console.dir(req.query) //{ a: '2' }
//   var responseObject = 'id = >'+req.query.id
//   res.send(responseObject);
// });


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// app.post('/json',jsonParser, function(req, res) {
//   console.dir(req.body) 
//   var responseObject = req.body
//   res.send(responseObject);
// });
// app.post('/url',urlencodedParser, function(req, res) {
//   console.dir(req.body) 
//   var responseObject = req.body
//   res.send(responseObject);
// });


app.post('/upload', upload.single('logo'), function(req, res) {
  console.dir(req.file);
  res.send({ 'ret_code': 0 });
});
app.listen(3000);
console.log('listening to port 3000');