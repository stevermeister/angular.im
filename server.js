var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

//static content
app.all('/*', function(req, res) {
  res.sendFile('index.html', { root: __dirname+'/public' });
});

module.exports = app;
