// Editando arquivo com FS

'use strict';

const fs = require('fs');
fs.readFile('./index.txt', 'utf-8', (err, data)=>{
    if (err) throw err;

    data = data.replace('Arquivo', 'EDITEI AQUI');

    fs.writeFile('./index.txt', data, 'utf-8', (err)=>{
        if (err) throw err;
        console.log('Arquivo modificado com sucesso!');
    });
});