var http = require('http');
var fs = require('fs');
var onRequest = function(request, response) {
    console.log('Request received');
    
    response.writeHead(200, { 'Content-Type': 'text/html' });
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(response)


    // response.writeHead(200, { 'Content-Type': 'application/json' });
    // var myObj = {
    //     name: "hfpp2012",
    //     job: "programmer",
    //     age: 27
    // };
    // response.end(JSON.stringify(myObj));


    // response.writeHead(200, { 'Content-Type': 'text/plain' });
    // response.write('Hello from out application');
    // response.end();

    // response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    // response.write('<html>');
    // response.write('<body>');
    // response.write('<h1>Hello, World!</h1>');
    // response.write('</body>');
    // response.write('</html>');
    // response.end();


}

var server = http.createServer(onRequest);

server.listen(3000, '127.0.0.1');
console.log('Server started on localhost port 3000');