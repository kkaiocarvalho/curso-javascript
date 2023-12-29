let pessoa = {
    "nome": "Kaio",
    "idade": 20,
    "profissao": "Estudante",
    "hobbies": ["Video Game", "Estudar", "Series"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJson = JSON.parse(pessoaTexto);

console.log(pessoaJson);
console.log(pessoaJson.nome);
console.log(pessoaJson.hobbies[0]);