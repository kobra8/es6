// var sumValues = (a,b) => {
//     return a + b
// }

var sumValues = (a, b) => a + b;
var showValue = x => x;

console.log(sumValues(3,6));
console.log(showValue(6));

let array = [10, 20, 30, 40, 50];

// let sum = array.reduce(function(a, b) {
//     return a + b
// })
let sum = array.reduce((a, b) => a + b);

console.log(sum);