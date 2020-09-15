const fs = require('fs');

var filename = process.argv[2];
const buf = fs.readFileSync(filename);

console.log(buf.toString().split('\n').length-1);

