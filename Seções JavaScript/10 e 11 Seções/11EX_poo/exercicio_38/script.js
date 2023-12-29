/*
EX03
- Crie um objeto que simula um endereço de um cliente;
- Propriedades: Rua, bairro, cidade e estado;
- No construtor o endereço  já deve ser definido por completo:
- Crie métodos para atualizar todas as propriedades;
*/

class Endereco {
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua){
        this.rua = novaRua;
    }
    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }
    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }
    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }

}

let cliente1 = new Endereco(
    'João Limirios dos Anjos',
    'Segismundo',
    'Uberlândia',
    'Minas Geiras'
);

console.log(cliente1);

cliente1.novaRua = 'Av. Franciso Ribeiro';

console.log(cliente1);