const fs = require('fs')

fs.unlink('./stuff/app.js',(err)=>{
  console.log(err)
})

fs.mkdir('stuff', function() {
  fs.readFile('./app.js', 'utf8', function(err, data) {
      fs.writeFile('./stuff/app.js', data, function() {
          console.log('copy successfully');
      })
  })
});