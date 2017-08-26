let color = {
    name: 'blue',
    hex: '#0000FF'
}

console.log(color);
Reflect.deleteProperty(color, 'hex');
console.log(color);

let prop1 = Object.defineProperty(color, 'class', {value: 'basic'});
console.log(prop1);

let prop2 = Reflect.defineProperty(color, 'shadow', {value: 'dark'});
console.log(prop2);