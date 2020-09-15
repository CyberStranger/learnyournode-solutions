const fs = require('fs');

var filename = process.argv[2];
fs.readFile(filename,(err, data)=>{
    if (err) console.log(err);
    else {
	    console.log(data.toString().split('\n').length-1);
    }
});

