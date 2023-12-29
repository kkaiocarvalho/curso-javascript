/**
EX04
- Crie uma classe que simule um carro;
- Propriedades: marca, cor, gasolina restante;
- Crie um método de dirigir o carro que vá diminuindo a gasolina gradativamente;
- E um de abastecer a gasolina quando necessário;
 */


class Carro {
    constructor(marca, cor, marcadorGasolina){
        this.marca = marca;
        this.cor = cor;
        this.marcadorGasolina = marcadorGasolina; 
    }

    dirigir(combustivel){
        if(this.marcadorGasolina === 0){
            console.log("Sem combustível! Precisa abastecer!");
        } else if(combustivel > this.marcadorGasolina){
            console.log("Você não tem combustível para está viagem! Você tem apenas " + this.marcadorGasolina + "L, e quer rodar " + combustivel + "L!");
        } else {
            this.marcadorGasolina -= combustivel;
            console.log("GASOLINA: " + this.marcadorGasolina + "L");
        }

        if(combustivel >= this.marcadorGasolina && this.marcadorGasolina == 0){
            console.log("Acabou seu combustivel! GASOLINA: " + this.marcadorGasolina);
        }
    }

    abastecer(combustivel){
        this.marcadorGasolina += combustivel;
        console.log("GASOLINA: " + this.marcadorGasolina + "L");
    }

}

let carro1 = new Carro('Renault', 'Chumbo', 20);

console.log(carro1);

carro1.dirigir(50);

carro1.dirigir(20);

carro1.abastecer(30);

carro1.dirigir(14);

carro1.dirigir(2);

carro1.abastecer(100);

carro1.dirigir(115);