/*
Crie uma estrutura if que verifica a entrada na balada, se tiver mais de 18 anos pode entrar;
Armazenar a idade em uma variável com let;
Insira uma instrução console.log("Pode entrar"), caso a pessoa tenha  mais de 18 anos;
*/

const nome = prompt("Nome: ");
const idade = prompt("Idade(insira em números): ");

if(idade >= 18){
    alert(`Pode entrar! Bem vindo(a) ${nome}`);
} else {
    alert(`Lamento ${nome}, mas você não pode entrar! Apenas maiores de 18 anos! E você tem apenas ${idade}`);
}