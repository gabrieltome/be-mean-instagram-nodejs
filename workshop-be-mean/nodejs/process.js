'use strict';

const http = require('http');

let server = http.createServer((request, response) => {

});

server.listen(3000, () => {
	console.log('I am on!');
});

console.log(process.execPath)

process.on('SIGINT', () => {
	console.log('\t I am leaving...');
	process.exit(0);
});