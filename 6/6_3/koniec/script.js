function Counter() {
	this.count = 0;
	setTimeout(() => {
		this.count++;
		console.log(this.count);
	}, 1)
};

var c = new Counter();