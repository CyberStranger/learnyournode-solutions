const http = require('http');

const url = process.argv[2];
http.get(url, (res)=> {
    res.setEncoding('utf8');
    console.log(res);
    res.on('data', chunk=> console.log(chunk));
    //res.on('error', error=> console.error(error));
}).on('error', (error)=> console.error(error));
