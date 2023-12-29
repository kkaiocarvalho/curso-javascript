let frase = "testando o método split";

console.log(frase.split(" ")); // [ 'testando', 'o', 'método', 'split' ]

let palavras = frase.split(" ");

console.log(palavras); // [ 'testando', 'o', 'método', 'split' ]

let produtos = "Banana;Maçã;Jaca;Pera;Bola;Tapete;";
console.log(produtos.split(";")); 
/*[
    'Banana', 'Maçã',
    'Jaca',   'Pera',
    'Bola',   'Tapete',
    ''
  ] */