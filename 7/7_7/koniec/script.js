function *gen() {
	yield "Raz";
	yield "Dwa";
	yield "Trzy";
}

let x = gen();
console.log(x.next().value);
console.log(x);
console.log(x.next().value);
console.log(x);
console.log(x.next().value);
console.log(x);
console.log(x.next().done);