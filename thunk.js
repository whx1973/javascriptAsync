const fs = require('fs');
const path = require('path'); 
const thunk = function (fileName, codeType){
	return function(callback){
		fs.readFile(fileName,codeType,callback)
	}
} 
const readFileThunk = thunk(path.resolve(__dirname,'./data/data1.json'), 'utf-8'); 
readFileThunk((err, data) => {
	console.log("data1.json = "+data);
})
