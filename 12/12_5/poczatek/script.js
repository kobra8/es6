const obj = {
    name: 'Tomek',
    age: 40
};
console.log(obj);
const objClone = Object.assign(obj, {id: 567});

console.log(obj);
console.log(objClone);