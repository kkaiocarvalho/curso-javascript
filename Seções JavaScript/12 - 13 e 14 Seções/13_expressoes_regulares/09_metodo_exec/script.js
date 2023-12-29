const digitos = /\d+/;

console.log(digitos.exec("tem o número 100 aqui")); /* retorna um objeto
[
  '100',
  index: 14,
  input: 'tem ao número 100 aqui',
  groups: undefined
]
*/
console.log(digitos.exec("tem o número aqui")); // null
