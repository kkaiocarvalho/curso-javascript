let pessoa = {
    nome: "Kaio",
    profissao: "Estudante/Dev",
    idade: 20,
}
console.log(pessoa.nome); // Kaio

delete pessoa.nome; // delete nome = Kaio

console.log(pessoa.nome); // undefined

console.log(pessoa.idade); // 20

pessoa.casado = false;

console.log(pessoa.casado); // false