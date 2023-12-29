/*
Escreva um função que recebe dois números, o primeiro é a base e o segundo a potencia;
Depois faça essa operação e retorne o resultado;
Por exemplo: 3,2 = 9
*/

function operacao(base, potencia){
    let resultado = Math.pow(base, potencia);
    console.log(`BASE: ${base} - POTÊNCIA: ${potencia} = ${resultado}`);
}
operacao(2,5);




function potencia(a,b){
    return a ** b;
}
console.log(potencia(3,2));

