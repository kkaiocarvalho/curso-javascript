function criarCachorro(raca, patas, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("Au au");
    }
    return cachorro;
}

let doberman = criarCachorro('Doberman', 4, 'Preta');

console.log(doberman);

let viralata = criarCachorro('Viralata', 3); // quando não passo a cor, deverá retornar undefined

console.log(viralata);

viralata.latir();
