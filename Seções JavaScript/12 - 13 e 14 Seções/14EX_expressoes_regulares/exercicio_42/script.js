/**
 Exercício 02
 - Crie um regex que só aceite strings terminadas com ID;
 - Depois teste;
*/

const strId = /\w+ID/;

console.log(strId.test("124ID"));//true

const validarIDnumerico = /\d+ID\b/; // ID\B = o \b vai garantir que string termine com id
console.log(validarIDnumerico.test("1DID")); //false
console.log(validarIDnumerico.test("A5B7")); // false
console.log(validarIDnumerico.test("ID")); // false
console.log(validarIDnumerico.test("4ID")); // true
console.log(validarIDnumerico.test("124ID")); //true
console.log(validarIDnumerico.test("1tID")); // false
console.log(validarIDnumerico.test("1t2ID")); // true