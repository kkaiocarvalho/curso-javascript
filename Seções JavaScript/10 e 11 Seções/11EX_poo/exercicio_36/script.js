/*
Ex 1
- Crie uma classe que simula uma conta no banco (utiliza a forma que preferir);
- Deve conter a propriedade saldo;
- E pos método deposito e saque;
- Teste os métodos
*/

class Conta {
    constructor(saldo){
        this.saldo = saldo;
    }

    saque(valor){
        this.saldo -= valor;
    }

    deposito(valor){
        this.saldo += valor;
    }
}

let conta1 = new Conta(0);

conta1.deposito(100);
console.log(conta1.saldo); //100
conta1.saque(30);
console.log(conta1.saldo); //70

