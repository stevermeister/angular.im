var http = require('http');
var fs = require('fs');

var app = http.createServer(function(req, res) {
  fs.readFile('./src/index.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();  
  });
});

module.exports = app;
