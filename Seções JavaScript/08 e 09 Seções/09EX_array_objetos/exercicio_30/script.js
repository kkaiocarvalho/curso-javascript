/*
- Crie um array com 5 nomes, incluindo o seu;
- Verifique se o seu nome existe no array;
- Se existir imprima alguma mensagem no console;
*/

let nomes = ["Livinha", "Kaio", "Rosana", "Sergio", "Carvalho"];

/*function addArray(){
    let valor = prompt("Digite o nome:");
    if(valor){
        nomes.push(valor);
        console.log("Nomes atualizados: " , nomes)
    }
}

addArray();*/

if (nomes.includes("Kaio")){
    console.log("Nome foi encontrado!");
} else {
    console.log("Nome não foi encontrado!");
}


let lista = [];

function addNoArray(valor){
    if(valor){
        lista.push(valor);
    }

    console.log(lista);
}

addNoArray("Kaio");
addNoArray("Lívia");
addNoArray("Rosana");
addNoArray("Sergio");