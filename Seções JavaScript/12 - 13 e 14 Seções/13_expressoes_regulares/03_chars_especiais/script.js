const pontoRegex = /./; // aceita tudo
console.log(".");

console.log(pontoRegex.test("asd")); // true
console.log(pontoRegex.test(" ")); // true
console.log(pontoRegex.test("123")); // true
console.log(pontoRegex.test("123sad")); // true

const dregex = /\d/; // [0-9] aceita todos que contenham chars numericos
console.log("d");

console.log(dregex.test("asd")); // false
console.log(dregex.test(" ")); // false
console.log(dregex.test("123")); // true
console.log(dregex.test("123sad")); // true

const dDregex = /\D/; //[^0-9] não aceita todos que contenham chars numericos
console.log("D");

console.log(dDregex.test("asd")); // true
console.log(dDregex.test(" ")); // true
console.log(dDregex.test("123")); // false
console.log(dDregex.test("123sad")); // true

const sRegex = /\s/; // aceita espaços vazios, quebras de linhas, ou tabs
console.log("s");

console.log(sRegex.test("asd")); // false
console.log(sRegex.test(" ")); // true
console.log(sRegex.test("123")); // false
console.log(sRegex.test("123sad")); // false


const sSregex = /\S/; // não aceita espaços vazios, quebras de linhas, ou tabs
console.log("S");

console.log(sSregex.test("asd")); // true
console.log(sSregex.test(" ")); // false
console.log(sSregex.test("123")); // true
console.log(sSregex.test("123sad")); // true

const wRegex = /\w/; // aceita caracteres alfanumericos
console.log("w");

console.log(wRegex.test("asd")); // true
console.log(wRegex.test(" ")); // false
console.log(wRegex.test("123")); // true
console.log(wRegex.test("123sad")); // true


const wWregex = /\W/; // não aceita caracteres alfanumericos
console.log("W");

console.log(wWregex.test("asd")); // false
console.log(wWregex.test(" ")); // true
console.log(wWregex.test("123")); // false
console.log(wWregex.test("123sad")); // false
