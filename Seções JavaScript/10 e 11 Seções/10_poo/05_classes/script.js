let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function(){
        console.log("Au au");
    }
}

let labrador = Object.create(cachorro);

labrador.latir(); // Au au

labrador.raca = "Labrador";

console.log(labrador.raca); //Labrador


let pinscher = Object.create(cachorro);
pinscher.raca = "Pinscher";
console.log(pinscher.raca); // Pinscher
pinscher.latir(); // Au au
console.log(pinscher.patas); // 4

let pinscher2 = Object.create(pinscher);
console.log(pinscher2.raca);// Pinscher