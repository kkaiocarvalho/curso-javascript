let p = Promise.resolve(5);

console.log("outros códigos...");

console.log(p); // Promise { 5 }

p.then((value) => {return value + 5}) 
 .then((value) => {console.log(value)}); // o valor é 10
    