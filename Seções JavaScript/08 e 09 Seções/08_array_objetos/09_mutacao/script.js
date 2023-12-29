let pessoa = {
    nome: "Kaio"
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: "Kaio"
}

console.log(pessoa == pessoa2); // true
console.log(pessoa3 == pessoa); // false
console.log(pessoa3 == pessoa2); // false

pessoa2.nome = "Lívia";

console.log(pessoa.nome); // Lívia

pessoa.nome = "Rosana";

console.log(pessoa2.nome) //Rosana