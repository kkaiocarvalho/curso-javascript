/*
Escreva uma função que recebe uma string;
Se o texto conter mais de 10 caracteres imprima "Texto muito longo";
Se conter menos, imprima "Texto dentro do limite";
*/

function checarTamanhoTexto(dado){
    let tamanho = dado.length;

    if(tamanho > 10){
        console.log("Texto muito longo");
    } else if(tamanho <= 10){
        console.log("Texto dentro do limite");
    }
}

checarTamanhoTexto("kaio Sergio");

checarTamanhoTexto("Kaio Lindo");

function checarTamanhoTextoV2(texto){
    if(texto.length > 10){
        console.log("Texto muito longo");
    } else if(texto.length <= 10){
        console.log("Texto dentro do limite");
    }
}
checarTamanhoTextoV2("texto maior");
checarTamanhoTextoV2("menor");