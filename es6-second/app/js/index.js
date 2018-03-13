/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Spread on Objects and Arrow Func.');

const address = {
  city: 'LA',
  country: 'USA',
  postCode: 'LA44'
};

const name = {
  firstName: 'Andy',
  lastName: 'Jones'
};

const citizen = { ...address, ...name };

log(citizen);
log(JSON.stringify(citizen, null, 2));
console.log(citizen);

// Arrow functions

  const powers = [1,2,3,4,5].map(number => Math.pow(number, 2));
  log(powers);

  // Lexical this

  const person = {
    name: 'Alex',
    cars: ['ferrari', 'lambo'],
    toString: function() {
      // log(`${this.name} has ${this.cars}`)
      this.cars.forEach(car => {
        log(`${this.name} has ${car}`);
      });
    }
  }
  
  person.toString();

  //Testing this
 
  var a = {
    name: "Hello a object",
    doSomething: function() {
      var self = this;
      self.name = "Updated a object";
      console.log(self);

      var setName = function(newname) { // if You use Arrow function in this place You don`t need self variable
        self.name = newname;
      }
      setName("Updated again! A object!");
      console.log(self);
    }
  }

  a.doSomething();

  //Object properties short syntax ES6

  const pricePropName = "price";

  const calculator = (name, price) => { // calculator is const means readonly
    
    return {
      name, // shorter version: name: name
      add(n1,n2){ // shorter version: add: function(n1, n2)
        return n1 + n2
      },
      [pricePropName+"Netto"]: price // You can use variable with [] to assign object property name
    }
  }
 
  const calc = calculator("Casio", 19.99);

  log(calc.name);
  log(calc.add(20,10));
  log(calc.priceNetto);
  