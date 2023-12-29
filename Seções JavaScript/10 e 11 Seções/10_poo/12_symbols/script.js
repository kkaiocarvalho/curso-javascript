class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }

}

Cachorro.prototype.raca = 'SRD';
let patas = Symbol();
Cachorro.prototype[patas] = 4;


let viralata = new Cachorro("Viralata", "Caramelo");

console.log(viralata.patas);

console.log(Cachorro.prototype.raca);

console.log(viralata.raca);

// acessando o symbol
console.log(Cachorro.prototype[patas]);

console.log(viralata[patas]);