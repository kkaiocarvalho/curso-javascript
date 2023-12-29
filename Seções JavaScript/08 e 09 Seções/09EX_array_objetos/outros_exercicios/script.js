/*
Criando array e identificando elementos
- Crie uma variável qty, ela deve ter a quantidade de elementos do array (use length para identificar);
- Crie uma variável chamada el com o valor do terceiro elemento do array;
*/

const arr = [1, 2, 3, 4];

let qty = arr.length;

let el = arr[2];

/*
Preenchendo array
- Insira 5 elementos na variável arr;
- Os elementos devem ser um número, somando o iterador mais 5;
- O iterador é a variável temporária que controla o loop;
*/

const arr1 = [];

for(let i = 0; i < 5; i++){
    arr1.push(i + 5);
}
console.log(arr1);

/*
Encontrar o maior número em um array
- Crie uma função chamada findMaxNumber que recebe como parâmetro um array de números.
- A função deve retornar o maior número presente no array.
*/

let arr2 = [20, 43, 52, 10];

function findMaxNumber(args){
      let maiorNumero = Math.max(...args);
      return maiorNumero;
}

console.log(findMaxNumber(arr2));

/*
Soma de Números Únicos
- Escreva uma função chamada sumUniqueNumbers que recebe um array de números como argumento.
- A função deve calcular e retornar a soma de todos os números que aparecem apenas uma vez no array.
- Utilize uma estrutura de dados auxiliar para armazenar a contagem de cada número no array.
- Percorra o array e verifique se cada número ocorre apenas uma vez. Se sim, some-o à variável de soma.
- Considere que o array pode conter tanto números inteiros positivos quanto negativos.
*/

function sumUniqueNumbers(numbers){
    //objeto
    const numberSave = {};
    
    //percorrer o Array
    for(const x of numbers){
        if(numberSave[x] === undefined){
            numberSave[x] = 1;
        } else {
            numberSave[x]++;
        }
    }

    let sum = 0;
    
    for(const x of numbers){
        if(numberSave[x] === 1){
            sum += x;
        }
    }
    return sum;
}

const arrayExemplo = [1, 2, 3, 2, 4, 5, 6, 1, 4, 7];
const resultado = sumUniqueNumbers(arrayExemplo);
console.log(resultado);

/*
Remover elementos duplicados de um array
- Crie uma função chamada removeDuplicates que recebe como parâmetro um array de elementos.
- A função deve remover os elementos duplicados do array, mantendo apenas as ocorrências únicas.
*/

function removeDuplicates (args1){
    const uniqueArray = [];
    
    for(let y = 0; y < args1.length; y++){
        if(uniqueArray.indexOf(args1[y]) === -1){
            uniqueArray.push(args1[y]);
        }
    }
    return uniqueArray;
}

const numerosTeste = [2,1,1,2,3,4,5,6];
console.log(removeDuplicates(numerosTeste));