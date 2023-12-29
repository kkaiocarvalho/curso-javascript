let carro = {
    portas : 2,
    portamalas: '200L',
    motor: '2.0'
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true,
}

console.log('Antes de copiar as propriedades de adicionais');
console.log(carro);

Object.assign(carro, adicionais);

console.log('Depois de copiar as propriedades de adicionais');
console.log(carro);