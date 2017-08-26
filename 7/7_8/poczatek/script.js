function *cities() {
    yield 'Warszawa';
    yield 'Wrocław';
    yield 'Poznań';
}

let places = cities();
for ( let city of places ) {
    console.log(city);
}
// wartości z kolekcji wyświetlają się automatycznie bez użycia next()