const http = require('http');
const map = require('through2-map'); // need to install. npm installl through2-map

const port = process.argv[2];

const server = http.createServer((req, res)=>{
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
     })).pipe(res);
});

server.listen(port)
