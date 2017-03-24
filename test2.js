const fs = require('fs'); 
const path = require('path');
const Q = require('q');

//  --------------Q.nfcall  Q.nfapply--------------------

function fn6() {

	// const fullFileName1 = path.resolve(__dirname, './data/data1.json')
 //    const result1 = Q.nfcall(fs.readFile, fullFileName1, 'utf-8')
 //    result1.then(data => {
 //        console.log(data)
 //    }).catch(err => {
 //        console.log(err.stack)
	// })

	const fullFileName1 = path.resolve(__dirname, './data/data1.json');
	const result1 = Q.nfcall(fs.readFile, fullFileName1, 'utf-8');
	result1.then(data => {
		console.log(data);
	}).catch(err => {
		console.log(err.stack);
	})

	const fullFileName2 = path.resolve(__dirname, './data/data2.json');
	const result2 = Q.nfapply(fs.readFile, [fullFileName2, 'utf-8']);
	result2.then( data => {
		console.log(data);
	}).catch(err => {
		console.log(err.stack);
	})
}

fn6();