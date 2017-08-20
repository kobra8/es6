let productOld = {
	id: 293,
	showId: function() {
		return this.id;
	}
}

let productArrow = {
	id: 293,
	showId: () =>  this.id
}
// Funkcji strzałkowych nie powinnismy używać do metod -> problem z this

console.log(productOld.showId())
console.log(productArrow.showId())

//let Product = () => {};
//let p = new Product();
// Nie można używać Arrow functions jako konstruktora 
let ProductRight = function() {
	console.log("Konstruktor działa z funkcją zapisaną w stylu ES5")
};
let r = new ProductRight();
console.log(r);

r.info = "Test stworzonego obiektu";
console.log(r.info);

let productNew = () => ({id: 1234});
// Jeżeli Arrow function zwaraca literał obiektu trzeba dodatkowo opakować go w nawiasy okrągłe

console.log(productNew());