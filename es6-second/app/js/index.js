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
 
  