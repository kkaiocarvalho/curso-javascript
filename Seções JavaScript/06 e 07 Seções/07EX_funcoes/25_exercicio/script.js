/*
Escreva uma função que recebe um número, e o decrementa de 1 em 1 com um loop;
Além disso imprima somente os numeros pares no console;
*/

function imprimePar(num){

    for(let i = num; i >= 0; i--){
        if(i % 2 == 0){
            console.log(`Números pares ${i}`);
        }
    }
}
imprimePar(10);
imprimePar(63);
imprimePar(200);