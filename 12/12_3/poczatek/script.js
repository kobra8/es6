const arr = 'Header';
console.log(Array.from(arr));
const arr2 = [1,2,3];
console.log(Array.from(arr2, x => x * 4));
const arr3 = Array.of(10);
console.log(arr3);
const arr4 = [1,2,3,4,5];
console.log(arr4.find(x => x < 3));
//zwraca pierwszá wartość spełniającą kryterium -> szuka od lewej
