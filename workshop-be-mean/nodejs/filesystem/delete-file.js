'use strict';

const fs = require('fs');

fs.unlink('index.txt', (err)=>{
    if (err) throw err;
    console.log('Arquivo deletado com sucesso!');
})