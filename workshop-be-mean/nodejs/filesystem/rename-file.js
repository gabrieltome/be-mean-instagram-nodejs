const fs = require('fs');

fs.rename('./index.txt', 'index2.txt', (err)=>{
    if (err) throw err;
    console.log('Arquivo renomeado com sucesso!');
});