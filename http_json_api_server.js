const http = require('http');
let url = require('url');
const port = process.argv[2];

function getJsonTime(t) {
    return { 'hour': t.getHours(), 'minute': t.getMinutes(),'second': t.getSeconds() }
}

function getUnixTime (time) {
    return {'unixtime': time.getTime()}
}

function parseQuery(url) {
    switch (url.pathname) {
      case '/api/parsetime':
        return getJsonTime(new Date(url.query.iso))
      case '/api/unixtime':
        return getUnixTime(new Date(url.query.iso))
      default: return {'error' : 'please enter a valid endpoint url'};
    }
}
  
const server = http.createServer( (req, res ) => {
    if ( req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        url = url.parse(req.url, true);
        res.end( JSON.stringify (parseQuery(url)));
    } else {
        res.writeHead(405)
        res.end( JSON.stringify({ 'error':   req.method  +  ' method is not allowed'}));
    }
})

server.listen(port , () => {
    console.log ( ' server is listening on port ' + port )
});
