let a = 10;

function multiplicar (x,y){
    let a = x * y;

    console.log("Função: " + a); //escopo função

    if( a > 10) {
        let a = 0;
        console.log("If: " + a); // escopo if dentro da função
    }
}

console.log("Global: " + a); //escopo global

multiplicar(3,7);

