/* Outros exercicios */

/*
Contador de Palavras
- Crie uma classe chamada WordCounter que representa um contador de palavras.
- A classe deve ter um construtor que inicializa um objeto vazio.
- A classe deve ter um método chamado countWords que recebe uma string como parâmetro.
- O método countWords deve contar o número de palavras na string fornecida e retornar o resultado.
- Considere que as palavras são separadas por espaços em branco.
*/

class WordCounter {
    constructor() {
        // construtor vazio
    }
    countWords(str) {
        // remover espaços em branco extras no início e no final da string
        const trimStr = str.trim();
        // verificar se a string está vazia
        if (trimStr === '') {
            return 0;
        }
        // dividir a string em palavras usando espaços em branco como delimitador
        const words = trimStr.split(/\s+/);

        // contar o número de palavras
        return words.length;
    }
}

const wordCounter = new WordCounter();
const texto = "Esta é uma frase de exemplo.";
const resultado = wordCounter.countWords(texto);

console.log(resultado); // Saída esperada: 8


/*
Calculadora de Retângulos
- Crie uma classe chamada "Retangulo" que representa um retângulo.
-A classe deve ter os seguintes atributos:

- largura: representando a largura do retângulo (número maior que zero).
- altura: representando a altura do retângulo (número maior que zero).

- A classe deve ter os seguintes métodos:
- calcularArea(): retorna a área do retângulo (largura * altura).
- calcularPerimetro(): retorna o perímetro do retângulo (2 * (largura + altura)).
*/

class Retangulo {
    constructor(largura, altura){
        if(largura > 0 && altura > 0){
        this.largura = largura;
        this.altura = altura;
        } else {
            console.log("Os valores de largura e altura devem ser maiores que zero!");
        }
    }
    
    //métodos
    calcularArea(){
       return this.largura * this.altura;
    }
    calcularPerimetro(){
        return 2 * (this.largura + this.altura);
    }
}

let retangulo = new Retangulo(10,20);

const teste1 = retangulo.calcularArea();

console.log(teste1);

const teste2 = retangulo.calcularPerimetro();

console.log(teste2);


/*
Conta Bancária
Crie uma classe chamada "ContaBancaria" que representa uma conta bancária.

A classe deve ter os seguintes atributos:
numeroConta: representando o número da conta (string ou número).
saldo: representando o saldo da conta (número).

A classe deve ter os seguintes métodos:
depositar(valor): recebe um valor como parâmetro e adiciona esse valor ao saldo da conta.
sacar(valor): recebe um valor como parâmetro e verifica se o saldo é suficiente para efetuar o saque. Se for, realiza o saque subtraindo o valor do saldo. Caso contrário, exibe uma mensagem informando que o saldo é insuficiente.
consultarSaldo(): retorna o saldo atual da conta.

*/

class ContaBancaria {
    constructor(numeroConta,saldo){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
    
    depositar(valor){
        this.saldo += valor;
        console.log("Você fez um deposito no valor de: R$ " + valor + " | Seu saldo agora é de: R$ " + this.saldo);
        return this.saldo;
    }
    sacar(valor){
        this.saldo -= valor;
        console.log("Você fez um saque no valor de: R$ " + valor + " | Seu saldo agora é de: R$ " + this.saldo);
        return this.saldo;
    }
    consultarSaldo(){
        console.log("Seu saldo é de R$ " + this.saldo);
        return this.saldo;
    }
}

let conta1 = new ContaBancaria("001", 0);

conta1.depositar(1000);
conta1.sacar(55);
conta1.consultarSaldo();

/*
Sistema de Reservas de Voo
Crie uma classe chamada "Voo" que representa um voo em um sistema de reservas de voo.
A classe deve ter os seguintes atributos:

codigoVoo: representando o código único do voo (string ou número).
origem: representando a cidade de origem do voo (string).
destino: representando a cidade de destino do voo (string).
assentosDisponiveis: representando a quantidade de assentos disponíveis no voo (número).

A classe deve ter os seguintes métodos:
reservarAssento(): verifica se há assentos disponíveis no voo e, se houver, decrementa a quantidade de assentos disponíveis em um.
consultarAssentosDisponiveis(): retorna a quantidade de assentos disponíveis no voo.
*/

class Voo {
    constructor(codigoVoo, origem, destino, assentosDisponiveis) {
        // Atributos
        this.codigoVoo = codigoVoo;
        this.origem = origem;
        this.destino = destino;
        this.assentosDisponiveis = assentosDisponiveis;
    }

    // Métodos
    reservarAssento() {
        if (this.assentosDisponiveis > 0) {
            this.assentosDisponiveis--;
            console.log("Assento reservado com sucesso!");
        } else {
            console.log("Não há assentos disponíveis para reserva.");
        }
    }

    consultarAssentosDisponiveis() {
        return this.assentosDisponiveis;
    }
}

let voo1 = new Voo("101", "EUA", "BRAZIL", 100);

console.log("Assentos disponíveis antes da reserva: " + voo1.consultarAssentosDisponiveis());
voo1.reservarAssento();
console.log("Assentos disponíveis após a reserva: " + voo1.consultarAssentosDisponiveis());

/*
Sistema de Biblioteca
Crie uma classe chamada "Livro" que representa um livro em um sistema de biblioteca.
A classe deve ter os seguintes atributos:

titulo: representando o título do livro (string).
autor: representando o autor do livro (string).
disponivel: representando a disponibilidade do livro (boolean).

A classe deve ter os seguintes métodos:
emprestar(): verifica se o livro está disponível para empréstimo e, se estiver, atualiza a disponibilidade para false.
devolver(): verifica se o livro não está disponível para empréstimo e, se não estiver, atualiza a disponibilidade para true.
consultarDisponibilidade(): retorna a disponibilidade atual do livro.
*/

class Livro {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
      this.disponivel = true;
    }
  
    emprestar() {
      if (this.disponivel) {
        this.disponivel = false;
        console.log('Livro emprestado com sucesso.');
      } else {
        console.log(`O livro não está disponível para empréstimo.`);
      }
    }
  
    devolver() {
      if (!this.disponivel) {
        this.disponivel = true;
        console.log('Livro devolvido com sucesso.');
      } else {
        console.log('O livro já está disponível.');
      }
    }
  
    consultarDisponibilidade() {
      return this.disponivel ? 'Disponível' : 'Indisponível';
    }
  }
  
  
  const livro1 = new Livro('Harry Potter', 'J.K. Rowling');
  console.log(livro1.consultarDisponibilidade());
  
  livro1.emprestar();
  console.log(livro1.consultarDisponibilidade());
  
  livro1.devolver();
  console.log(livro1.consultarDisponibilidade());