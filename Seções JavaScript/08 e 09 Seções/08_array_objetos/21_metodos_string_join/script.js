let frase = "testando o método split";
let palavras = frase.split(" ");

let novaFrase = palavras.join("@");
console.log(novaFrase); // testando@o@método@split

novaFrase = palavras.join("-");
console.log(novaFrase); // testando-o-método-split
