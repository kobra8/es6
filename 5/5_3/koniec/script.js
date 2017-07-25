function getNumbers() {
	return [1, 2, 3, 4, 5];
}

var [a, , , , e] = getNumbers();
console.log(a);
console.log(e);
