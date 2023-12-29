const validaDominio = /[?www.]\w+\.com|.com.br/; 
// ett podemos modificar: /www.\w+\.com|.com.br/ para /[?www.]\w+\.com|.com.br/;

console.log(validaDominio.test("www.kaio.com")); // true
console.log(validaDominio.test("www.kaio.com.br")); // true
console.log(validaDominio.test("kaio.com")); // false
console.log(validaDominio.test("kaio.com.br")); // true
console.log(validaDominio.test("www.kaio")); // false