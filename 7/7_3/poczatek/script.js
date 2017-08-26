let set = new Set();

set.add(10);
set.add(20);
set.add("OK");
set.add(true);

console.log(set);

console.log(set.has(10));

for ( let v of set ) {
    console.log(v);
}
set.delete(20);