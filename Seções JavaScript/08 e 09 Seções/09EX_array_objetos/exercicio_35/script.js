/*
Desafio calculadora
- Crie um objeto calculadora;
- Que tem os seguintes métodos: somar, subtrair, multiplicar e dividir;
- Os métodos só devem aceitar dois parãmetros;
- Utilize cada um dos métodos e imprima os valores no console;
*/

let calculadora = {

    somar: function(num1, num2){
        let resultado = num1 + num2;
        console.log(resultado);
    },

    subtrair: function(num1, num2){
        let resultado = num1 - num2;
        console.log(resultado);
    },

    multiplicar: function(num1, num2){
        let resultado = num1 * num2;
        console.log(resultado);
    },

    dividir: function(num1, num2){
        let resultado = num1 / num2;
        console.log(resultado);
    },
}

calculadora.somar(5,2);

calculadora.subtrair(10,4);

calculadora.multiplicar(5,5);

calculadora.dividir(8,2);