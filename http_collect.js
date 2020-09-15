const http  = require('http');
const bl    = require('bl'); // need to install via npm

http.get(process.argv[2], (res)=>{
    res.setEncoding('utf8');
    res.pipe(bl(function(err, data){
        if (err) return console.error(err);
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});