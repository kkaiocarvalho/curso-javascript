/*
EXERCÍCIO 03
- Crie uma regex que aceite a seguinte espressão "Marca: nomeDaMarca";
- Onde nomeDaMarca  pode variar para Nike, Adidas, Puma, Asics;
- Depois teste;
*/

const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validaMarca.test("Marca: Nike")); // true
console.log(validaMarca.test("Marca: Adidas")); // true
console.log(validaMarca.test("Marca: Puma")); // true
console.log(validaMarca.test("Marca: Asics")); // true
console.log(validaMarca.test("Marca: ")); // false
console.log(validaMarca.test("Marca: dasdas")); // false
console.log(validaMarca.test("nome: Asics")); // false

console.log();

console.log(validaMarca.test("MARCA: NIKE")); // false
console.log(validaMarca.test("Marca: adidas")); // false
console.log(validaMarca.test("marca: puma")); // false
console.log(validaMarca.test("marca: asics")); // false
