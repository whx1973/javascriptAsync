var path =  require('path');
var readFilePromise = require('./readFilePromise')
var readFilePromise2 = require('./readFilePromise')

const fullFileName = path.resolve(__dirname,'./data/data1.json');
const result = readFilePromise(fullFileName);
const result2 = readFilePromise(path.resolve(__dirname,'./data/data2.json'));
result.then(data => {
	console.log('data1 content ' + data);
	return result2;
}).then(data => {
	console.log('data2 content ' + data);
}).catch(err => {
	console.log(err);
})

var promise1 = new Promise((resolve, reject) => {
	var task = function(){
		console.log(1)
		resolve(new Date());
	}
	setTimeout(task, 10000)
})

var promise2 = new Promise((resolve, reject) => {
	var task = function(){
		console.log(6)
		resolve(new Date());
	}
	setTimeout(task, 1000)
})

Promise.race([promise1, promise2]).then(data =>{
	console.log(data);
})


Promise.all([promise2, promise1]).then(data =>{
	console.log(data[0]);
	console.log(data[1]);
})

