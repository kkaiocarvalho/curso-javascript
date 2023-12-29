"use strict" // aqui todo o arquivo usa o strict

//opa = 'teste'; retorna erro, pois não tem tipo definido

let opa = 'teste';

// strict em uma function
function teste(){
    "use strict"
    //testando = 'teste'; // erro, pois não tem tipo definido
    let testando = 'teste';
}

teste();

//delete Object.prototype; // script.js:16 Uncaught TypeError: Cannot delete property 'prototype' of function Object() { [native code] }

/*
false.prop = ""; 
"teste".prop = ""; 

Uncaught TypeError: Cannot create property 'prop' on string 'teste'
    at script.js:20:14
(anonymous) @ script.js:20
*/