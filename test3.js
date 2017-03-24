function * Hello(){
	yield 100;
	yield (function() {return 2000})();
	return 200;
}

var h = Hello();
console.log(typeof h);
console.log(Reflect.ownKeys(Object));
console.log(h.next());
console.log(h.next());
console.log(h.next());
console.log(h.next());
