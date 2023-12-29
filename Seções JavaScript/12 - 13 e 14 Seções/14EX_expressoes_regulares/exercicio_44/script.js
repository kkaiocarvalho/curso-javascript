/*
Exercício 04
- Crie uma regex que valide endereços de IP;
- Ex: 127.0.0.1;
- Depois teste;
*/

const validarEnderecos = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarEnderecos.test("127.0.0.1")); // true

console.log(validarEnderecos.test("8.8.8.8")); // true

console.log(validarEnderecos.test("192.168.0.62")); // true

console.log(validarEnderecos.test("192.198.0")); // false

console.log(validarEnderecos.test("192")); // false

console.log(validarEnderecos.test("sdasda")); // false

console.log(validarEnderecos.test("1234564")); // false

console.log(validarEnderecos.test("1924.1647.01.06542")); // false

