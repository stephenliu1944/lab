#!/usr/bin/env node
// var exec = require('child_process').exec;
// var shell = require('shelljs');
require('shelljs/global');

var name = process.argv;

// var child = exec('echo hello ' + name, function(err, stdout, stderr) {
//     if (err) throw err;
//     console.log(stdout);
// });

exec('echo hello ' + name);
mkdir('-p', 'out/Release');