const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    const file = fs.createReadStream(process.argv[3]);
    res.writeHead(200, { 'content-type': 'text/plain' })
    file.pipe(res);
});

server.listen(process.argv[2]);
