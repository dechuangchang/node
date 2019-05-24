var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


var data = [{item:'get milk'},{item:'walk dog '},{item:'coding'}]


module.exports = function(app) {
  app.get('/todo', function(req, res) {
    res.render('todo', {todos:data});
  });

  app.post('/todo',urlencodedParser, function(req, res) {
    
    data.push(req.body)
    res.render('todo', {todos:data});
  });

  app.delete('/todo/:item', function(req, res) {
    
    data.forEach((arr,index)=>{
      if(arr.item.trim().replace(/ /g, "-")==req.params.item){
        
        data.splice(index, 1); 
        res.render('todo', {todos:data});
      }
    })
    
  });
}