const fs = require('fs')
//同步读取

let data = fs.readFileSync('./aps.txt',"utf8")
console.log(data)


//异步读取

// fs.readFile('./aps.txt',"utf8", (err, data) => {
//   console.log(data)
// })



//同步写入方法 writeFileSync
fs.writeFileSync("./aps.txt", "Hello world");

//异步写入方法 writeFile
// fs.writeFile("./aps.txt", "Hello world!!", err => {
//   if (!err) {
//     fs.readFile("./aps.txt", "utf8", (err, data) => {
//         console.log(data,1); 
//     });
//   }
// });
