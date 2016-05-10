// DELETE

'use strict';

const http = require('http');
//requisitando módulo 'querystring'
const querystring = require('querystring');
const postData = querystring.stringify({

});

//JSON de configuração
const options = {
  host: 'webschool-io.herokuapp.com',
  method: 'DELETE', //ALTERANDO O MÉTODO PARA DELETE
  path: '/api/pokemons/573144500d118e1100e65526', // caminho do objeto a ser DELETADO
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
};

// função callback
function callback(res) {
  console.log('STATUS:' + res.statusCode);
  console.log('HEADERS:' + JSON.stringify(res.headers));

  let data = '';

  res.setEncoding('utf8');

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Dados finalizados:', data);
  });
}

const req = http.request(options, callback);

req.on('error', (e) => {
  console.log('ERRO:' + e.message);
});

req.end();
