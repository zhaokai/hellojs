var http = require("http");
var url = require("url");

function logHeader(req) {
    console.log(req.url);
}

function postListen(postDataChunk) {
    console.log(postDataChunk);
}

function endListen() {
    console.log("\n--------\n");
}

function start() {
    server = http.createServer(function (req, res) {
        var postData = "";
        var pathname = url.parse(req.url).pathname;

        logHeader(req);
        req.addListener("data", postListen);
        req.addListener("end", endListen);

        res.writeHeader(200, {"Content-Type": "text/plain"}); 
        res.write("\n--------\n");
        res.write(req.url);
        res.write("\n--------\n");
        res.end();
    })
    server.listen(80);
    console.log("httpd start @80");
}

exports.start = start;
