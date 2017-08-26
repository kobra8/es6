const string = 'ok ok ok ok';
const pattern = /ok/g;
// flaga y - sticky powoduje powrót na początek szukania

console.log(pattern.exec(string));
console.log(pattern.lastIndex);
console.log(pattern.exec(string));
console.log(pattern.lastIndex);
console.log(pattern.exec(string));
console.log(pattern.lastIndex);