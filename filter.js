const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
const ext =  process.argv[3];
let filtered = [];
fs.readdir(filePath,(err, list)=>{
	if(err) console.log(err);
	filtered = list.filter(word => path.extname(word).split('.')[1] === ext);
	filtered.forEach(el => console.log(el));
});
