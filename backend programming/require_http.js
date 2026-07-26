const http = require('http');

var server = http.createServer(function (req, res) {
  res.end('hi\n');
})

server.listen(3000);