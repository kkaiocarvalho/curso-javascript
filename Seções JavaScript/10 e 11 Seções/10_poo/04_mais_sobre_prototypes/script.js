const pessoa = {
    maos: 2
}

//Object é pai do objeto que criei, por isso consigo usar os métodos do pai

//console.log(Object.getPrototypeOf(pessoa)); // [Object: null prototype] {}

//console.log(Object.getPrototypeOf(pessoa) === Object.prototype); //true

//console.log(pessoa.hasOwnProperty('maos')); //true

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);
console.log(pessoaNova.hasOwnProperty('maos')); // false
console.log(Object.getPrototypeOf(pessoaNova) === pessoa); // true