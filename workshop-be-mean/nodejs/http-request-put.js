// alterando o nome com PUT

'use strict';

const http = require('http');
//requisitando módulo 'querystring'
const querystring = require('querystring');
const postData = querystring.stringify({
  name: 'gabrieltome', // alterando o nome
});

//JSON de configuração
const options = {
  host: 'webschool-io.herokuapp.com',
  method: 'PUT', //ALTERANDO O MÉTODO PARA PUT
  path: '/api/pokemons/5731429a0d118e1100e65525', // caminho do objeto a ser alterado
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
req.write(postData); // escrevendo na requisição os dados do POST - ENVIANDO DE VERDADE!!!
req.end();
