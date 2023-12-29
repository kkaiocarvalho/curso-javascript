class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("Au au!");
    }
}
Cachorro.prototype.patas = 4;

let viralata = new Cachorro("Viralata", "Caramelo");

console.log(viralata.patas);

viralata.latir();