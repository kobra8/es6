function getNumbers() {
    return [1 ,2, 3, 4, 5 ]
}
let [a, , ,d] = getNumbers();
console.log(a, d) 

// Domyślne parametry funkcji

function multiplyNumbers(a = 2, b = 3 * a){
        return a * b
}
console.log(multiplyNumbers());

function sortFrameworks(...Args) {
 return Args.sort();
}
console.log(sortFrameworks("Ember", "React", "Angular","Webpack", "Ionic"));

function sum(a,b,c){
 return a + b + c
}

var values = [2,4,6]

console.log(sum(...values));

var arr1 = [10,20,30]
var arr2 = [40,50,60]
arr1.push(...arr2);
console.log(arr1);

function setOptions({env, db}){
        return [env, db]
}
let opt = setOptions({env: 'DEV', db:'MySql'});
console.log(opt);