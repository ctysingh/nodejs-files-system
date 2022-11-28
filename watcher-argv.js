'use strict';

const fs = require('fs');
// using global object process
const fileName = process.argv[2];

if(!fileName){
    throw error('A file watch must be specified!!');    
}

// template string using backtick ` ` for expression interpolation
fs.watch(fileName, () => console.log(`file ${fileName} changed!`));
console.log(`now watching ${fileName} for changes`);

