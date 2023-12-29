/*
EX05
- Crie uma classe conta bancaria;
- Com as propriedades de saldo na conta corrente, saldo na conta poupança e juros da poupança;
- Crie métodos de depósito e saque, também um método para transferir dinheiro da poupança para a conta corrente;
- Além disso, crie uma conta especial que herda da conta normal;
- Na conta especial os juros são dobrados da conta normal;
*/

class Conta {
    constructor(saldoCorrente, saldoPoupanca, juros){
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.jurosPoupanca = juros;
    }

    saque(valor){
        this.saldoCorrente -= valor;
        console.log("Você fez um saque no valor de: " + valor)
        console.log("Saldo da Conta Corrente: " + this.saldoCorrente)
    }
    deposito(valor){ 
        this.saldoCorrente += valor;
        console.log("Você fez um deposito no valor de: " + valor)
        console.log("Saldo da Conta Corrente: " + this.saldoCorrente)
    }
    transferenciaCC(valor){
        this.saldoCorrente -= valor;
        this.saldoPoupanca += valor;
        console.log("Você fez uma transferência da Corrente para a Poupança no valor de: " + valor)
        console.log("Saldo da Conta Corrente: " + this.saldoCorrente)
        console.log("Saldo da Conta Poupança: " + this.saldoPoupanca)
    }
    transferenciaCP(valor){
        this.saldoPoupanca -= valor;
        this.saldoCorrente += valor;
        console.log("Você fez uma transferência da Poupança para a Corrente no valor de: " + valor)
        console.log("Saldo da Conta Poupança: " + this.saldoPoupanca)
        console.log("Saldo da Conta Corrente: " + this.saldoCorrente)
    }
    jurosDeAniversario(){
        let juros = (this.saldoPoupanca * this.jurosPoupanca) / 100;
        this.saldoPoupanca += juros;
        console.log("Juros de aniversário! Saldo Poupança: " + this.saldoPoupanca);
    }
}

class ContaEspecial extends Conta {
    constructor(saldoCorrente, saldoPoupanca, juros){
        super(saldoCorrente, saldoPoupanca, juros*2);
    }
}

let conta = new Conta(1000, 5000, 1);
console.log(conta);

conta.deposito(10); 
conta.saque(50);

console.log();
console.log(conta);

console.log();
conta.transferenciaCC(50);

console.log();
conta.transferenciaCP(10);

console.log();
conta.jurosDeAniversario();
console.log(conta);

let conta2 = new ContaEspecial(10000, 50000, 1);
console.log(conta2);
conta2.saque(5000);
conta2.jurosDeAniversario();
