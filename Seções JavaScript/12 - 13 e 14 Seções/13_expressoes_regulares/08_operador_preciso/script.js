const cep = /\d{5}-\d{3}/; // cep custuma ter 5 digitos depois um traço e em seguida mais 3 digitos

console.log(cep.test("88117-500")); // true
console.log(cep.test("asd")); // false
console.log(cep.test("881-50")); // false
console.log(cep.test("99999-999")); // true

const tel = /\(\d{2}\)\d{4,5}-\d{4}/; 
// \d{2} = DDD entre ()
// \d{4,5} primeiros digitos de numeros de telefone (enter 4 a 5 digitos)
// - traço para separar os digitos
// \d{4} ultimos 4 digitos após o traço

console.log(tel.test("3491234-1234")); //false
console.log(tel.test("(34)91234-1234")); //true
console.log(tel.test("(34)1234-1234")); //true
