var person = {
	name: 'Tomek',
	age: 30,
	city: 'Krakow'
}

var {name: n, age: a, city: c = 'Warszawa'} = person;
console.log(n);
console.log(a);
console.log(c);
