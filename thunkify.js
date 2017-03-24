const path = require('path');
const fs = require('fs');
const thunkify = require('thunkify'); 
const thunk = thunkify(fs.readFile); 
const readFileThunk = thunk(path.resolve(__dirname,'./data/data1.json'),'utf-8'); 
readFileThunk((err, data) => {
	console.log(data);
});