const net = require('net');
const strftime = require('strftime')

const server = net.createServer(socket =>{
    socket.write(strftime('%Y-%m-%d %H:%M\n'));
    socket.end();
    socket.on('end', ()=> {
        console.log('client disconnected');
    });
    //socket.pipe(socket);
});

server.on('error', err=>{
    throw err;
});

server.listen(process.argv[2]);