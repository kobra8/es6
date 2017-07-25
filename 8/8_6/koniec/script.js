let person = {
	name: 'Paweł',
	age: 40,
	city: 'Warszawa'
}

let s = Symbol();
person[s] = '1376';

for (let i in person) {
	console.log(i);
}

console.log(Object.getOwnPropertySymbols(person));