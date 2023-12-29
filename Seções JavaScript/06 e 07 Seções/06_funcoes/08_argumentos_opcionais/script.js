function soma(a,b){
    if(a === undefined || b === undefined){
        console.log("Está precisa ter dois argumentos");
    } else {
        return a + b;
    }
}

console.log(soma());

console.log(soma(1,2));

function saudacao(nome,idade){
    if(idade === undefined ){
        console.log("Olá " + nome);
    } else {
        console.log("Olá " + nome + ", você tem " + idade + " anos.");
    }
}

saudacao("Kaio"); //if
saudacao("Kaio", 20); // else