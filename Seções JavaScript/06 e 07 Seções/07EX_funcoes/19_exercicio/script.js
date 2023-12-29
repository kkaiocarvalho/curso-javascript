/*
Escreva uma função que retorne um número aleatório;
O número máximo retornado deve ser passado via parâmetro:
Dica: utiliza Math.random(); 
*/

function randomNumber (num){
    
    return Math.floor(Math.random() * num) + 1;
}

console.log(randomNumber(100));
console.log(randomNumber(10));
console.log(randomNumber(50));

/*
    return Math.floor(Math.random() * num) + 1;
floor arredonda pra baixo por isso colocamos o + 1 no final
*/