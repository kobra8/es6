/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Exericses');

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

  //Promises all

  const namesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['Anna', 'Jones', 'Ali', 'Jake']); //Symulacja odpowiedzi sewera 200
    }, 3000);
  
    setTimeout(() => {
      reject("no data back from the server, there was an error");
    }, 5000);
  });
  
  const surnamesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['Williams', 'Bravo', 'Mohammado', 'Smith']); //Symulacja odpowiedzi sewera 200
    }, 3000);
  
    setTimeout(() => {
      reject("no data back from the server, there was an error");
    }, 5000);
  });
  
 
  Promise.all([namesPromise, surnamesPromise]).then(data => { // Promise all zwraca data tylko wtedy, kiedy wszystkie promisy w funkcji są success
    log("----- Set timeout promise fired ------");
    console.log("Data recived: ",data);
    const [names, surnames] = data; // Destructuring -> data zwraca tablicę z 2 tablicami. Tu wydzielamy odpowiednio do 2 zmiennych
    console.log("Names: ",names);
    console.log("Surnames: ",surnames);
    for (var i = 0; i < names.length; i++) {
      const name = names[i];
      const surname = surnames[i];
      log(`${name} ${surname}`);
    }
  
  }).catch(error => {
    log(error);
  });

  // Fetch random user from API

  const getUsers = x => {
    const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${x}`);
    fetchRandomUsers.then(data => {
     data.json().then(resultUsers => {
       console.log(JSON.stringify(resultUsers))
       resultUsers.results.forEach(user => {
         const {gender, email} = user;
         log(`${gender} - ${email}`)
       })
     })
    })
  }
  getUsers(4);

  // Generators, Promises and Coroutines
  log("----- Generators, Promises and Coroutines ------");

  //Poniższa funkcja typu generator to refaktor funkcji getUsers() z powyższego ćwiczenia

  import { coroutine } from 'bluebird'; //Import biblioteki coroutine

const getRandomUsers = coroutine(function* (n) {
  const fetchRandomUsers = yield fetch(`https://randomuser.me/api/?results=${n}`)
  const data = yield fetchRandomUsers.json();
  return data;
});

getRandomUsers(10).then(randomUsers => {
  randomUsers.results.forEach(user => {
    const {gender, email} = user;
    log(`${gender} - ${email}`);
  });
}).catch(err => log);
  

  // React Component

import React, { Component } from 'react';
import { render } from 'react-dom';

logTitle('React & ES6');

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1> Hello World React </h1>
    );
  }
}

const mountNode = document.getElementById('mountNode');

render(<MainComponent />, mountNode);
