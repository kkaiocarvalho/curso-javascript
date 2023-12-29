/*
Verifique se o número é primo!
Um número primo, é um natural, maior que 1 e apenas divisivel por si próprio e por 1;
*/

let num = 4;
let divisoes = 0;


for(let i = 1; i <= num; i++){

    //2 = 1 e 2 | 3 = 1 e 3 | 4 = 1, 2 e 4 (não é primo) | 5 = 1 e 5 | ...

    if(num % i == 0){
        divisoes++;
    }

}

if( divisoes == 2){
    console.log(`O número ${num} é primo`);
} else {
    console.log(`O número ${num} não é primo`);
}


/* 
Remova os números pares
Preencha a variável semPares apenas com números ímpares;

Utilize uma estrutura de loop para percorrer o array arr;

Verifique se o número é ímpar e coloque no array semPares;

No final, exiba o array semPares com console.log;
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const semPares = []

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 1){
        semPares.push(arr[i]);
    }
}
console.log(semPares);


/*
Aprofundando em condicionais
Crie uma função chamada classificarNumero que recebe um número inteiro como argumento.

A função deve retornar uma string com a classificação do número de acordo com as seguintes regras:

Se o número for positivo e par, retorne "Positivo e Par".

Se o número for positivo e ímpar, retorne "Positivo e Ímpar".

Se o número for negativo, retorne "Negativo".

Se o número for zero, retorne "Neutro".
*/

function classificarNumero(numero) {
    if (numero > 0 && numero % 2 === 0) {
        return "Positivo e Par";
    } else if (numero > 0 && numero % 2 !== 0) {
        return "Positivo e Ímpar";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Neutro";
    }
}

// Exemplos de uso:
console.log(classificarNumero(6)); // "Positivo e Par"
console.log(classificarNumero(3)); // "Positivo e Ímpar"
console.log(classificarNumero(-5)); // "Negativo"
console.log(classificarNumero(0)); // "Neutro"
