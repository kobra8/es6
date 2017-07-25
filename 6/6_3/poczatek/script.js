function Counter() {
	this.count = 0;
	setTimeout(function(){
		this.count++;
		console.log(this.count);
	}, 1)
};

var c = new Counter();