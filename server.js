var http = require('http');
var port = process.env.PORT || 18080;
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Node.js</h1>');
    res.write('<p>git:'+process.env.BAE_GIT+'</p>');
    res.end('<p>Hello World From Heroku to BAE for 1st time</p>');
}).listen(port);
