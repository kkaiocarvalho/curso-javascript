const validarDataDeNascimento = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

//[0-9]{2} validar numeros de 0 a 9  e apenas 2 chars
// [/] barra pra separar data

console.log(validarDataDeNascimento.test("05/02/2000")); //true
console.log(validarDataDeNascimento.test("5/2/2000")); // false
console.log(validarDataDeNascimento.test("05-02-2000")); // false
console.log(validarDataDeNascimento.test("05/02/00")); // false
console.log(validarDataDeNascimento.test("05/02/9000")); // true

const validarDataDeNascimentoV2 = /[01-31]{2}[/][01-12]{2}[/][1923-2023]{4}/;

console.log(validarDataDeNascimentoV2.test("05/02/9000")); // 
console.log(validarDataDeNascimentoV2.test("32/02/2000")); // 
console.log(validarDataDeNascimentoV2.test("30/22/2000")); // 