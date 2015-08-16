var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');
var port = process.env.PORT || 18080;
http.createServer(function(req, res) {
    var filePath = path.join(__dirname, '/tmp/log.txt');
    var stat = fileSystem.statSync(filePath);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(res);
}).listen(port);
