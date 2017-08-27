let string = 'Header';
console.log(string);
console.log(string.padStart(10, ' '));
console.log(string.padEnd(10, 'x'));

function sumValues(a, b,) {
    return a + b
}
//Można zostawić przecinek na końcu
console.log(sumValues(2, 4,));

const obj = {
    name: 'Header',
    id: 234
}

console.log(Object.values(obj));
console.log(Object.entries(obj));