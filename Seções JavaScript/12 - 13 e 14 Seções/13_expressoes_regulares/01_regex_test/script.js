const reg1 = new RegExp('bola');

console.log(reg1.test("tem bola?")); // true

console.log(reg1.test("não tem ball")); // false

const reg2 = /bola/;

console.log(reg2.test("tem bola?")); // true

console.log(reg2.test("não tem ball")); // false


let texto = 'Tem bola na cesta!';
console.log(reg2.test(texto)); // true


console.log(/quadrado/.test("Onde tem um quadrado")) // true

console.log(/numero2/.test("numero3")) // false
console.log(/numero2/.test("numero2")) // true

