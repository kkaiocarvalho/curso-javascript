/*
- Crie um array com 5 elementos;
- Faça uma iteração entre todos eles e imprima no console o valor;
*/

let frutas = ["Maçâ", "Banana", "Melão", "Melância", "Laranja"];

for(let i = 0; i <frutas.length; i++){
    console.log(frutas[i]);
}

let nomes = ["Livinha", "Kaio", "Rosana", "Sergio", "Carvalho"];

console.log();

function imprimeNomes(array){
    for(let x = 0; x < array.length; x++){
        console.log(array[x]);
    }
}
imprimeNomes(nomes);
console.log();
imprimeNomes(frutas);








