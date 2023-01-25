'use strict'
const fs = require('fs');

const { exec } = require('child_process');
const { spawn } = require('child_process');
//const ls = spawn('ls', ['-lh', '/usr']);

const exceCmdType = process.argv[2];
if(exceCmdType === 1) {
    const url = "https://www.youtube.com/";
    const cmdCommand = `start chrome /new-tab ${url}`;
    try{
        exec(cmdCommand);    
    }
    catch(error){
        console.log(error);
    }
} else {
    exec('ping google.com', (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout:\n${stdout}`);
    });
}


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
