// create REQUEST

'use strict';

const http = require('http');

// JSON options de configuração
const options = {
  host: 'webschool-io.herokuapp.com',
  path: '/api/pokemons/'
};

// função de callback
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

// criando a request utilizando options e o callback
const req = http.request(options, callback);

// cria o error
req.on('error', (e) => {
  console.log('ERRO:' + e.message);
});

//finalizando
req.end();
