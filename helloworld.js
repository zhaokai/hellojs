var http = require('http');   
server = http.createServer(function (req, res) {   
      res.writeHeader(200, {"Content-Type": "text/plain"});   
      res.end("Hello World\n");   
})   
server.listen(80);   
console.log("httpd start @80");