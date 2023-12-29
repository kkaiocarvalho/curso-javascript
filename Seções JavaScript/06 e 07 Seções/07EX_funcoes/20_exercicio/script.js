/*
Escreva uma função que recebe a idade de uma pessoa;
Se ela tem mais de 18 anos ela pode entrar na auto escola, imprima uma mensagem informando isso;
Se ela tem menos, ela não pode, imprima outra mensagem com este aviso;
Execute a função nos dois casos;
*/

function Pessoa( idade ) {
    if(idade === undefined){
        console.log("Insira seus dados corretamente!");
    } else if( idade >= 18){
        console.log(`Você tem ${idade} já pode entrar na auto escola!`);
    } else if (idade < 18){
        console.log(`Você tem apenas ${idade}, ainda não pode entrar na auto escola!`);
    }
};

Pessoa(20);
Pessoa(17);
Pessoa(18);