class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir (){
        console.log("Au au!");
    }

    get getCor(){
        return this.cor;
    }
    set setCor(cor){
        this.cor = cor;
    }
}

let cachorro1 = new Cachorro('Pastor Alemão','Indefinida');

console.log(cachorro1);

cachorro1.setCor = 'Marrom';

console.log(cachorro1.getCor);