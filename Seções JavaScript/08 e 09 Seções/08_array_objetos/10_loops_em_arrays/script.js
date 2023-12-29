let nomes = ["Kaio", "Lívia", "Rosana", "Sergio"];

for(let i = 0; i<=nomes.length; i++){
    console.log(nomes[i]); // [i] acessa o indice, que altera a cada loop peganda a cada vez uma chave diferente
}

let num_da_sorte = [10,152,789,15,324,6];
let ordem = num_da_sorte.sort((a, b) => a - b);
console.log(ordem);
for(let i = 0; i < num_da_sorte.length; i++){
    
}

/*
No JavaScript, array.sort() é um método usado para ordenar os elementos de um array. Quando nenhum argumento é passado para sort(), os elementos são convertidos em strings e classificados de acordo com a ordem de classificação de valores Unicode.

No entanto, para ordenar numericamente (em ordem crescente, por exemplo), é comum passar uma função de comparação para o método sort(). Essa função de comparação é responsável por definir a lógica de classificação dos elementos.

A função (a, b) => a - b é uma função de comparação utilizada para ordenar os números em ordem crescente. Aqui está o que está acontecendo:

a e b são dois elementos do array que estão sendo comparados.
a - b é o critério de comparação.
Se a - b resulta em um número negativo, significa que a deve vir antes de b.
Se a - b resulta em zero, significa que a e b são considerados iguais em termos de ordenação.
Se a - b resulta em um número positivo, significa que b deve vir antes de a.
Então, ao usar sort((a, b) => a - b), o array num_da_sorte será reordenado em ordem crescente numérica com base no valor numérico de seus elementos.

Após a execução dessa linha de código, o array num_da_sorte estará ordenado e o resultado é atribuído à variável ordem. Esta variável conterá o array ordenado que pode ser utilizado em outras partes do código.
*/