/*
Escreva uma função que detecta o tipo de dado passado.
Verifique se é um: number, boolean ou string
E retorne uma mensagem para cada tipo;
execute um função para cada uso;
*/

function detectaTipo(valor){
    let tipo = typeof valor;
    console.log(tipo);

    switch(tipo){
        case 'string':
            console.log("é uma string")
            break;
        case 'number':
            console.log("é um Number")
            break;
        case 'boolean':
            console.log("é um booleano");
            break;
    }
}

detectaTipo(10 > 2);

detectaTipo(100);

detectaTipo("Kaio");


function verificaTipo(dado){
    if(typeof dado === 'string'){
        console.log("é uma string");
    } else if(typeof dado === 'number'){
        console.log("é um Number");
    } else if (typeof dado === 'boolean'){
        console.log("é um Booleano");
    }
}

verificaTipo(true);
verificaTipo(20);
verificaTipo("Lívia");

