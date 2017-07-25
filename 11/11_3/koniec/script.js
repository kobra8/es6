class ArrayWithId extends Array {
	constructor(id) {
		super();
		this.id = id;
	}
	updateId(id) {
		this.id = id;
	}
}

let arr = new ArrayWithId(99);
arr.push("A");
arr.push("B");
arr.push("C");
arr.updateId(101);
console.log(arr);
console.log(arr.length);