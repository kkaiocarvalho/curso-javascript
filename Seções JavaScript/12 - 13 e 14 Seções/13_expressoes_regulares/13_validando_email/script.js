const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("kaio@gmail.com"));
console.log(validarEmail.test("kaio@gmail"));
console.log(validarEmail.test("gmail.com"));