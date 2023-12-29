/*
Armazene a velocidade de um carro em uma variável, com o número que desejar;
Faça uma estrutura if/else que verifica se ele está acima da velocidade;
80 é a velocidade máxima permitida;
Se estiver acima ou abaixo exiba mensagens com console.log
*/

let velocidade = prompt('Escolha um valor como velocidade do seu carro: ');

if(velocidade > 80){
    alert("Você está acima da velocidade! Máxima permitida é de 80KM");
} else{
    alert('Segue caminho meu querido! Está dentro dos limites!');
}