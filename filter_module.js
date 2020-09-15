const fs = require('fs');
const path = require('path');

function filter_ext(filePath, ext, callback_func){
	let filtered = [];
	fs.readdir(filePath, (err, list)=>{
		if(err) return callback_func(err);
		filtered = list.filter(word => path.extname(word).split('.')[1] === ext);
		return callback_func(null, filtered);
		//filtered.forEach(el => callback_func(el));
	});
}
module.exports = filter_ext;
