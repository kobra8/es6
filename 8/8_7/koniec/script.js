function getPerson(name, age) {
	return {
		name,
		age,
		checkAge() {
			if (this.age >= 18) {
				return true;
			} else {
				return false;
			}
		},
		['user' + name + age]: 'OK'
	};
};

let p = getPerson('Tomek', 44);
console.log(p);
console.log(p.checkAge());
console.log(p.userTomek44);