const pessoa = {
    maos: 2
}

//Object é pai do objeto que criei, por isso consigo usar os métodos do pai

console.log(Object.getPrototypeOf(pessoa)); // [Object: null prototype] {}

console.log(Object.getPrototypeOf(pessoa) === Object.prototype); //true

console.log(pessoa.hasOwnProperty('maos')); //true