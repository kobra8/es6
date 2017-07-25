let x = {};
let handler = {
	get: function(obj, key) {
		return `Wartość klucza ${obj[key]}`;
	}
};

let p = new Proxy(x, handler);

p.id = 345;
p.title = 'Kurs ES6';
console.log(p.title);