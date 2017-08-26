let m = new Map();
m.set(1, 'React');
m.set(2, 'Angular');
m.set(3, 'Ember');
m.set(4, 'babel');

console.log(m);

for (let v of m){
    console.log(v);   
}

console.log(m.size);

let r = m.get(1);

console.log(r);
m.delete(1);
m.clear();