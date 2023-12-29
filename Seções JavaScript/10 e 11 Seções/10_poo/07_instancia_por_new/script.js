function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log("Auuuuuuuuu");
    }
}

let pinscher = new Cachorro('Pinscher', 4, 'Caramelo');

pinscher.uivar();

