function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function(){
    console.log("Auuuuu");
}


let pinscher = new Cachorro('Pinscher', 4, 'Caramelo');

pinscher.uivar();
