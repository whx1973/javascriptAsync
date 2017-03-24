const fs =require('fs');
const path = require('path');
const readFilePromise = function (filename) {
	return new Promise( (resolve, reject) => {
		fs.readFile(filename, (err, data) =>{
			if (err) {
				reject(err) 
			}else{
				resolve(data.toString());
			}
		})

	})
}
module.exports = readFilePromise;