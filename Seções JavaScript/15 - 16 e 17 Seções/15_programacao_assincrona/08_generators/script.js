function* criardorId(){
    let id = 0;
    while(true){
        yield id++;
    }
}

let criaId = criardorId();

console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);

console.log(criaId.next());