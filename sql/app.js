var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'chang1994..',
  database: 'node_test'
});

connection.connect(function(err){
  if (err) {
    console.error('连接失败: ' + err.stack);
    return;
  }

  console.log('连接成功 id ' + connection.threadId);
});

var sql = 'SELECT id,name FROM websites';
//查

connection.query(sql, function (err, result) {
  if (err) {
    console.log('[SELECT ERROR] - ', err.message);
    return;
  }

  console.log('--------------------------SELECT----------------------------');
  console.log(result);
  console.log('------------------------------------------------------------\n\n');

});

connection.end();