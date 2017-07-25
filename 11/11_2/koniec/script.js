let color = {
	name: 'blue',
	hex: '#0000FF'
}

// Reflect.deleteProperty(color, 'hex');
// console.log(color);
// let prop = Object.defineProperty(color, 'class', {value: 'basic'});
let prop = Reflect.defineProperty(color, 'class', {value: 'basic'});
console.log(prop);