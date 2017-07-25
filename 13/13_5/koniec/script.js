async function wait3seconds(string) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(string);
		}, 3000);
	});
}

async function run() {
	let result = await wait3seconds('Content');
	return result;
}

run().then(res => {
	console.log(res);
});