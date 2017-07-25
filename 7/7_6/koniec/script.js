function createIterator(array) {
	let nextIndex = 0;

	return {
		next: function() {
			return nextIndex < array.length ?
				{value: array[nextIndex++], done: false} :
				{done: true};
		}
	};
};

let users = createIterator(['Andrzej','Pawel','Tomek']);
console.log(users.next().value);
console.log(users.next().value);
console.log(users.next().done);