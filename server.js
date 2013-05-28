var http = require('http'); 
function start(){ 
    server = http.createServer(function (req, res) {   
          res.writeHeader(200, {"Content-Type": "text/plain"});   
          res.end("Hello edwin\n");   
    })   
    server.listen(80);   
    console.log("httpd start @80");   
} 
exports.start = start;