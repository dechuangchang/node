var express = require('express');
var md5 = require('md5');
var axios = require('axios');
var app = express();
const fs = require('fs')

app.use('/zh', express.static('public'));

var name = 'withDrawRecord'
async function getJp(text) {
  var appid = '20191031000350079';
  var key = '8ir556nXJBXVM7SqgDyu';
  var salt = (new Date).getTime();
  var query = text;
  var from = 'zh';
  var to = 'jp';
  var str1 = appid + query + salt +key;
  var sign = md5(str1);
  
  let json =  await axios.get('http://api.fanyi.baidu.com/api/trans/vip/translate', {
    params: {
      q: query,
      appid: appid,
      salt: salt,
      from: from,
      to: to,
      sign: sign
    }
  })
  .then( (response)=> {
    return response.data.trans_result[0]
  })
  .catch( (error)=> {
    return error;
  });
  return JSON.stringify(json)
}
let data = fs.readFileSync('./zh/'+name+'.js',"utf8").toString();
var regex=/\:(.+?)\,/g;
var result;
let arr = [];
while((result=regex.exec(data))!=null) {
  arr.push(result[1])
}

var i = 0;
var timer = null;
timer = setInterval(()=>{
  if(i>=arr.length){
    console.log(name+'.js over');
    fs.writeFileSync('./ja_JP/'+name+'.js', data);
    clearInterval(timer);
    return
  }
  let val = arr[i].slice(arr[i].indexOf("'")+1,arr[i].lastIndexOf("'"))
  getJp(val).then(res2=>{
    data = `${data}`.replace(val,JSON.parse(res2).dst);
    console.log(parseInt((i/arr.length)*100)+'%  '+val+'-------->'+JSON.parse(res2).dst);
    i++;
  })
  
},2000)
