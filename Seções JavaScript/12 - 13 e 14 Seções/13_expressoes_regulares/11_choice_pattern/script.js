const reg = /\w+: (Kaio|Livinha|Rosana|Sergio)/;

console.log(reg.test("Nome: Kaio")); // True
console.log(reg.test("Nome: José")); // False
console.log(reg.test("Nome: Rosana")); // True