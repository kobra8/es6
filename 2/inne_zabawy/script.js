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

// console.log("Generowanie błędu przykład:");
// throw {
//     name: "Error",
//     message: "Wystąpił błąd"
// };
console.log("Przykład domknięcia:")
var setup = function() {
    var count = 0;
    return function(){
        return count +=1;
    }
}
var next = setup();
console.log(next);
console.log(next());
console.log(next());
console.log(next());
(function () {
    console.log('Uważaj! Tu funkcja natychmiastowa');
} ());
(function (){
    var days = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sb', 'Nd'],
    date = new Date(),
    msg = `Dziś jest ${days[date.getDay()]} dnia ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
    console.log(msg)
}());
// Natychmiastowa inicjalizacja obiektu

({
    id: 12,
    maxwidth: 600,
    maxheight: 400,
    gimmeMax: function () {
        return `Funkcja init() natychmiast inicjalizuje obiekt tu przykład: ${this.maxwidth} x ${this.maxheight}`
    },
    init: function () {
        console.log(this.gimmeMax());
        //dalsze instrukcje
    }
}).init();

// Cache w funkcji:
var myFunc = function(param) {
    var f = arguments.callee;
    var result;
    if(!f.cache[param]) {
        result = {};
        //Kosztowna operacja
        f.cache[param] = result;
    }
    return f.cache[param];
};
myFunc.cache = {};
// Obiekt konfiguracji
var conf = {
    first: "Jerzy",
    last: "Kowalski",
    dob: new Date().getFullYear()
}

function addPerson(first, last, dob, city) {
    return first
    //Wygląda na to, że obiekt się podpina pod pierwszy argument
}

console.log(addPerson(conf));

// Aplikacja funkcji

var sayHi = function(who) {
return `Witaj ${who? who : ''}!`
}
console.log(sayHi());
console.log(sayHi('Świecie'));
console.log(sayHi.apply(null,['Świecie mój']));
console.log(sayHi.call(null,'Świecie nasz'));