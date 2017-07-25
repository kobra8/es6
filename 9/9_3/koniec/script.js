let p1 = new Promise((resolve, reject) => {
	resolve('OK 1');
});

let p2 = new Promise((resolve, reject) => {
	// resolve('OK 2');
	reject('Błąd 2');
});

let p3 = new Promise((resolve, reject) => {
	resolve('OK 3');
});

Promise.all([p1, p2, p3]).then(results => {
	console.log(results);
}).catch(error => {
	console.log(error);
});