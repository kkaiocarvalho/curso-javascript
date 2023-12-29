/*
- Crie dois arrays, um com mais de 5 elementos e outro com menos;
- Faça uma função que verifica o número de elementos;
- Se possuir menos que 5, imprima "Poucos elementos" no console;
- Se tiver mais, imprima "Muitos elementos";
*/

let arr1 = ["a1", "b2", "c3", "d4", "e5", "f6"];
let arr2 = ["g7", "h8", "i9"];

function verificaTamanhoArray(array) {
    if (array.length >= 5) {
        console.log("Muitos elementos");
    } else if (array.length < 5) {
        console.log("Poucos elementos");
    }
}

verificaTamanhoArray(arr1);
verificaTamanhoArray(arr2);