var bodyParser = require('body-parser')

var mongoose = require('mongoose');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
mongoose.connect('mongodb+srv://admin:<admin>@chang-adt1z.mongodb.net/test?retryWrites=true',{useNewUrlParser: true});
var todoSchema = new mongoose.Schema({
  item: String
});
var myModel = mongoose.model('chang');
console.log(myModel)
// var itemOne = Todo({item: 'buy flowers'}).save(function(err) {
//   if (err) throw err;
//   console.log('item saved');
// });
// console.log(itemOne)

var data = [{item:'get milk'},{item:'walk dog '},{item:'coding'}]


module.exports = function(app) {
  app.get('/todo', function(req, res) {
    res.render('todo', {todos:data});
  });

  app.post('/todo',urlencodedParser, function(req, res) {
    
    data.push(req.body)
    res.json(data);
  });

  app.delete('/todo/:item', function(req, res) {
    
    data.forEach((arr,index)=>{
      if(arr.item.trim().replace(/ /g, "-")==req.params.item){
        
        data.splice(index, 1); 
        res.json( data);
      }
    })
    
  });
}
// 