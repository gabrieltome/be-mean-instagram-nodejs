'use strict';

let http = require('http')
  , url = require('url');

http.createServer(function (request, response){

  var result = url.parse(request.url, true);

  response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  response.write('<html><body>');
  response.write('<h1>Be MEAN</h1>');
  response.write('<h2>Query String</h2>');
  response.write('<ul>');

  for(var key in result.query){
    response.write('<li>'+key+':'+result.query[key]+'</li>');
  }

  response.write('</ul>');
  response.write('</body></html>');
  response.end();

}).listen(3000, function() {
  console.log('Servidor rodando em localhost:3000');
});
