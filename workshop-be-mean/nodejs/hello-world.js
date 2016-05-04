// Exemplo de createServer

var http = require('http');

// forma concatenada
/*
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type':'text/plain'});
  response.write('Be MEAN');
  response.end();
}).listen(3000, function(){
  console.log('Servidor rodando em localhost: 3000');
});
*/

//ou

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type':'text/plain'});
  response.write('Be MEAN');
  response.end();
});

server.listen(3000, function(){
  console.log('Servidor rodando em localhost: 3000');
});
