let x = 1;

let p = new Promise(function(resolve, reject){
    if( x === 1) {
        resolve('OK!');
    }
    else {
        reject(Error('Błąd'));
    }
});

console.log(p)

p.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);    
})