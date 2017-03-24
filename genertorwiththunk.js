const path = require('path');
const fs = require('fs');
const thunkify = require('thunkify');
const thunk = thunkify(fs.readFile);
const gen = function* (){
	const r1 = yield thunk(path.resolve('./data/data1.json'));
	console.log(r1.toString());
	const r2 = yield thunk(path.resolve('./data/data2.json'));
	console.log(r2.toString());
}
const g = gen();
g.next().value((err, data1) => {
    // 这里的 data1 获取的就是第一个文件的内容。下一行中，g.next(data1) 可以将数据传递给上面的 r1 变量，此前已经讲过这种参数传递的形式
    // 下一行中，g.next(data1).value 又是一个 thunk 函数，它又需要一个 callback 函数作为参数传递进去
    g.next(data1).value((err, data2) => {
        // 这里的 data2 获取的是第二个文件的内容，通过 g.next(data2) 将数据传递个上面的 r2 变量
        g.next(data2)
    })
})