const cachorro ={
    raca:'SRD', //sem raça definida

    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(raca){
        return "A raça é " + this.raca;
    },

    uivar: function(){
        console.log("Auuuuuuuuuuuuu");
    },
    rosnar: function(){
        console.log("grrrrr");
    }
}

console.log(cachorro.raca);

cachorro.setRaca("Pastor Alemão");

console.log(cachorro.getRaca());

