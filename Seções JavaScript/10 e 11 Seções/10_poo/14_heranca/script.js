class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}

let coiote = new Mamifero(4);
console.log(coiote.patas);

class Cachorro extends Mamifero{
    constructor(patas,raca){
        super(patas, patas); // imagine que queremos fazer mudança em patas, pra isso passamos o (patas, patas)
        this.raca = raca;
    }

    latir(){
        console.log("Au au!");
    }
}

let pug = new Cachorro(4, 'Pug');
console.log(pug.patas);