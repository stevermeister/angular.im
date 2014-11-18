var http = require('http');

var app = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><head><title>Some page that does nothing</title></head><body><h1>It works!</h1></body></html>');
  res.end();  
});

module.exports = app;
