const dia = /\d\d/; //esperando 2 digitos
console.log("/\d\d/");
console.log(dia.test("2019")); // true
console.log(dia.test("2019") && "2019".length == 2); // false
console.log(dia.test("asd")); // false
console.log(dia.test("asd12")); // true tem 2 digitos
console.log(dia.test("asd3")); // false tem 1 digito
console.log(dia.test("02")); // true

console.log(dia.test("05") && "05".length == 2); // true

const palavraPeloMenosTresLetras = /\w\w\w/;
console.log("/\w\w\w/");
console.log(palavraPeloMenosTresLetras.test("asd")); // true
console.log(palavraPeloMenosTresLetras.test("asdd"));// true
console.log(palavraPeloMenosTresLetras.test("as"));// false
