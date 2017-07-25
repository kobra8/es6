function *cities() {
	yield 'Warszawa';
	yield 'Wrocław';
	yield 'Poznań';
}

let places = cities();
for (let city of places) {
	console.log(city);
}