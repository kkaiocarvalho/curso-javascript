const reg1 = /[12345]/;

console.log(reg1.test("temos o numero 6")); // false

console.log(reg1.test("temos o numero 2")); // true


// temos os numeros 12345, ele entende que 23 é o numeros 2 e 3
console.log(reg1.test("temos o numero 23")); // true

const reg2 = /[0-9]/;
console.log(reg2.test("temos o numero 6")); // true
console.log(reg2.test("temos o numero 654789123")); // true