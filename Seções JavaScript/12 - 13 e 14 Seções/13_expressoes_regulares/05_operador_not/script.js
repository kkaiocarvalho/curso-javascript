const notAeB = /[^ab]/;

console.log(notAeB.test("a")); // false
console.log(notAeB.test("Aqui tem a")); // true - contem outros caracteres alem de a

const notAaZ = /[^a-z]/;

console.log(notAaZ.test("123 as")); // true - ele contem numeros
console.log(notAaZ.test("asdasdfddfsasqweawewsewssdds")); // false
