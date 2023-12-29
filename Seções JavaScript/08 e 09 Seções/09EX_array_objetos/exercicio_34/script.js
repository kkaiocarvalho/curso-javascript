/*
- Crie um array a partir de uma frase;
- Imprima cada palavra do array no console por meio de um for;
*/

let frase = "Ser programador requer muita prática"; // cria a frase

const arrayFrase = frase.split(" "); // cria um array separando pro espaços em branco

for(let i = 0; i < arrayFrase.length; i++){
    console.log(arrayFrase[i]);
}