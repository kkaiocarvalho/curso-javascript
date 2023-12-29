/* 
Faça uma estrutura if/else para verificar se um usuário pode dirigir;
Armazene em variáveis algumas informações sobre o usuário: idade, se tem CNH;
Se a idade for maior que 18 e não possui CNH, exiba uma mensagem;
Se a idade for maior que 18 e tem CNH, exiba uma mensagem;
Se não tiver 18 nem CNH, exiba uma mensagem;
*/

let nome = prompt('Qual o seu nome? ');
let idade = prompt('Qual a sua idade? ');
let cnh = prompt('Tem CNH? Responda com sim ou não.').toLowerCase;

switch(cnh){
    case "não":
        cnh = false;
        break;
    case "nao":
        cnh = false;
        break;
    case "sim":
        cnh = true;
        break;
}


if(idade >= 18 && cnh == false){
    alert(`${nome} você tem idade para dirigir! Mas não tem CNH`);
} else if(idade >= 18 && cnh == true){
    alert(`${nome} você tem ${idade} anos e tem CNH. Está liberado!`);
} else if(idade < 18 && cnh == false){
    alert(`${nome}, ${idade} anos, não tem CNH. Você não pode dirigir.`);
} else if(idade < 18 && cnh == true){
    cnh = false;
    alert(`${nome} você está mentindo!`);
}
