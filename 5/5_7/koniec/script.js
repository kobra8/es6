// function setOptions(options) {
// 	const env = options.env;
// 	const db = options.db;
// 	return [env, db];
// }

function setOptions({env = 'DEV', db}) {
	return [env, db];
}


let opt = setOptions({db: 'SQLite'});
console.log(opt);