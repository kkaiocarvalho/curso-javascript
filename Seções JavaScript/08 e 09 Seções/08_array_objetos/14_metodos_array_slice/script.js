let numeros = [0,1,2,3,4,5,6,7,8,9];

console.log(numeros.slice(4,5)); //4

console.log(numeros.slice(4,6));// 4 e 5

console.log(numeros.slice(2)); // vai buscar do elementos 2 até o final pois não recebeu segundo paramentro como final

console.log(numeros.slice(-2)); // vai retornar os 2 ultimos numeros do array: 8 e 9

console.log(numeros.slice(3,-2)); //vai pegar do índice 3 e eliminar os 2 ultimos