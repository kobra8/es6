let m = new Map();
m.set(1, 'React');
m.set(2, 'Angular');
m.set(3, 'Ember');
m.set(4, 'Babel');

m.clear();

for (const v of m) {
	console.log(v);
}

console.log(m.size);
const r = m.get(1);
console.log(r);