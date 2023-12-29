/**
EX04
- Crie uma classe que simule um carro;
- Propriedades: marca, cor, gasolina restante;
- Crie um método de dirigir o carro que vá diminuindo a gasolina gradativamente;
- E um de abastecer a gasolina quando necessário;
 */


class Carro {
    constructor(marca, cor, gasolinaRestante, consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante; 
        this.consumo = consumo;
    }

    dirigir(km){
        let litrosConsumidos = km / this.consumo;

        this.gasolinaRestante -= litrosConsumidos;
    }

    abastecer(l){
        this.gasolinaRestante += l;
    }
}

let carro1 = new Carro('Renault', 'Chumbo', 100, 14);


console.log(carro1);

carro1.dirigir(20);

console.log(carro1);

carro1.abastecer(30);

console.log(carro1);
