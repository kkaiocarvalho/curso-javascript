console.log('1'); // instantaneo


setTimeout(function(){
    console.log('5');
}, 2000); // 2000 = 2s (2 segundos depois ele irá retornar o nosso valor de 5 no console)

console.log('2'); // instantaneo
console.log('3'); // instantaneo
console.log('4'); // instantaneo