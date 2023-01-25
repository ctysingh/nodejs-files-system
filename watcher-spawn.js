'use strict'
const fs = require('fs');

const { exec } = require('child_process');
const { spawn } = require('child_process');
//const ls = spawn('ls', ['-lh', '/usr']);
const url = "https://www.youtube.com/";
const cmdCommand = `start chrome /new-tab ${url}`;
try{
    exec(cmdCommand);
}
catch(error){
    console.log(error);
}
//const fileName = process.argv[2];

/*
if(!fileName){
    throw Error('A file name must be specified');
}

fs.watch(fileName, () => {
    const ls = spawn('ls', ['-lh', fileName]);
    ls.stdout.pipe(process.stdout);
});
*/

//console.log(`watching ${fileName} changes`);
