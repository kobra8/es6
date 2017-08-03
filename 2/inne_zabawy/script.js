const arr = [1, 2, 3, 4];
console.log("Czy tablica zawiera liczbę 1? " + arr.includes(1));
// Taka zabawa ze starym JS
function Waffle() {
    if(!(this instanceof arguments.callee)) {
        return new arguments.callee();
    }
}
var myObj = { a:1, b:2 }
var a = new Array(256).join('*')
//console.log(typeof(a));
console.log(a);
console.log(typeof(a));
console.log(Array.isArray(a));
console.log(Object.prototype.toString.call(arr));
console.log(Object.prototype.toString.call(myObj));

var jsonObject = {"name": "Jerzy", "surname": "Drobot", "hands": [1,2]};
console.log(jsonObject);
var jsonString = JSON.stringify(jsonObject);
console.log(jsonString);
var data = JSON.parse(jsonString);
console.log(data.name + " " + data.surname);
console.log("Hands: " + data.hands[0]);

var noLetters = "abc123XYZ".replace(/[a-z]/gi,"_");
console.log(noLetters);

throw {
    name: "Error",
    message: "Wystąpił błąd"
};