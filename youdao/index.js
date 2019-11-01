const fs = require('fs')
const Translator = require('./translator');
let translator = new Translator();


var name = 'act';
translator.config = {
  from: 'zh-CHS', // zh-CHS(中文) || ja(日语) || EN(英文) || fr(法语) ...
  to: 'ja',
  appKey: '41f02db525026ac8', // https://ai.youdao.com 在有道云上进行注册
  secretKey: 'MpRhTUhM44tjOXyIOD2wydFzDR9RNxZd'
}

async function translateString(str) {
  let resultStr = await translator.translate(str)
  // console.log(JSON.parse(resultStr)[0])
  return JSON.parse(resultStr).translation[0];
}






  // translateString('第').then(res2=>{
  //     console.log(res2)
  // })


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

  translateString(val).then(res2=>{
    data = `${data}`.replace(val,res2);
    console.log(parseInt((i/arr.length)*100)+'%  '+val+'-------->'+res2);
    i++;
  })
  
  
},2000)
