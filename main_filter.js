const mymodule = require('./filter_module.js');

const filepath = process.argv[2];
const file_ext = process.argv[3];

function callback_func(err, list){
    if (err) console.log(err);
    list.forEach(el => console.log(el))
}

mymodule(filepath, file_ext, callback_func);
