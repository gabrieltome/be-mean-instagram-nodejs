// create a file

'use strict';

const fs = require('fs');

fs.writeFile('./index.txt', 'Arquivo criado com FS. (Texto)', 'utf-8', (err)=>{
    if (err) throw err;
    console.log('Arquivo criado com sucesso!');
});