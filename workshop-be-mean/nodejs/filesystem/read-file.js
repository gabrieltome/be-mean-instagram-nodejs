// lendo um arquivo

'use strict';

const fs = require('fs');

fs.readFile('./index.txt', 'utf-8', (err, result)=>{
    if (err) throw err;
    console.log(result);
});