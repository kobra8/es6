// function sumValues(a, b, c) {
// 	return a + b + c;
// }

// var values = [3, 2, 7];
// console.log(sumValues(...values));
var array1 = [10, 20, 30];
var array2 = [40, 50, 60];
array1.push(...array2);
console.log(array1);