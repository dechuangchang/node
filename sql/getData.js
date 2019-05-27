const express = require('express');
const app = express();

//解析表单的插件
const bodyParser = require('body-parser');
// // create application/json parser
// var jsonParser = bodyParser.json()

// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据
//创建数据库连接对象
const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost', //数据库地址
  user: 'root', //账号
  password: 'chang1994..', //密码
  database: 'node_test', //库名
  multipleStatements: true //允许执行多条语句
});


//查询出所有数据
app.get('/api/getlist', (req, res) => {
  const id = req.query.id
	console.log(id)
  const sqlStr = id ? 'select * from websites where id=?':'select * from websites'
  conn.query(sqlStr,id, (err, results) => {
    if (err) return res.json({
      data: [],
      status: 1,
      msg: '失败'
    })
    res.json({
      data: results,
      status: 200,
      msg:'成功'
    })
  })
})


//添加
 
app.post('/api/add',(req, res) => {
  const user = req.body
  console.log(req.body.name)
	const sqlStr = 'insert into websites set ?'
	conn.query(sqlStr, user, (err, results) => {
		if (err) return res.json({
			data: [],
      status: 200,
      msg:'失败'
		})
		res.json({
			data: [],
      status: 200,
      msg:'成功'
		})
	})
 
})






app.listen(3000,() => {
	console.log('http://127.0.0.1:3000');
});
