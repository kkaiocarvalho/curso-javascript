let sku = '34';

console.log(sku.padStart(6,"0")); // 000034

//nosso caracter(34) tem apenas 2 digitos, usando o método padStart nosso valor tera o incremento(primeiro paramentro 6) no início da string ou seja, a variavel sku tem que atingir 6 digitos e temos 2(34), e o valor que será incrementado é "0" dando o retorno de 000034

let sku2 = "1245";
console.log(sku2.padStart(6,"0")); //001245
//padStart(limite , "valor que irá preencher o limite da string");