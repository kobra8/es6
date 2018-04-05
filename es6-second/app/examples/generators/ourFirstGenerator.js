/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Generators');

//Generatory są podstawowym typem funkcji wykorzystywanym w asynchronicznym kodzie aplikacji

const getNumbers = function* () { //Funkcja typu generator - ręcznie można sterować wykonaniem fukcji -> zatrzymywać, wznawiać
  yield 1; // słowo kluczowe yield to taki inny return -> zwraca wartość i pauzuje funkcję
  yield "hello";
  yield true;
  yield { name: 'Alex'};
  return "i am done";
}

const numbersGen = getNumbers(); // implementacja funkcji getNumbers()

log(numbersGen.next().value); // Słowo next() ręcznie uruchamia zwracanie wartości
log(numbersGen.next().value);
log(numbersGen.next().value);
log(JSON.stringify(numbersGen.next().value)); //Tutaj korzystamy z JSON strigify aby wyświetlić zawartość obiektu jako string
log(numbersGen.next().value); //Funkcja generatora wykonuje po kolei wszystkie yields i na końcu zwraca true
log(numbersGen.next().done); //Czy wykonano już wszystkie elementy funkcji?