/*
Exerício 01
- Crie uma regex que aceite só letras maiúsculas;
- Depois teste;
*/

const alfabetoMaiusculo = /\D+[A-Z]/; // D or W

console.log(alfabetoMaiusculo.test("A maioria das pessoas...")); // false

console.log(alfabetoMaiusculo.test("a maioria das pessoas...")); // false

console.log(alfabetoMaiusculo.test("A MAIORIA DAS PESSOAS...")); // false

console.log(alfabetoMaiusculo.test("TESTE 123...")); // true