function verificaNumero(num){
   return new Promise((resolve, reject) => {
        if(num == 2){
            resolve(console.log(`O número é ${num}`));
        } else {
            reject(new Error("Falhou"));
        }
    })
} 
verificaNumero(2); // O número é 2
verificaNumero(3); // Error: Falhou


