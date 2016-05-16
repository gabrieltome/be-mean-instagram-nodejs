'use strict';

console.log('Meu diretório é :'+__dirname);

console.log('Nome do arquivo com diretório: '+__filename);

var buff = new Buffer('Hello, Global Buffer!');

console.log(buff.toString());