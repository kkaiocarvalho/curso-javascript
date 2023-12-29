// let b = 2; // comentando para mostrar o erro

try {
    let a = 2 + b;
} catch(e){
    console.log(e); // b is not defined
} finally { // vai excutar mesmo que o catch retorne erro
    console.log("Executou!");
}

