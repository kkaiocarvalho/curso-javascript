let novoElemento = document.createElement('p');
let texto = document.createTextNode("Algum texto");

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector('#titulo-principal');
let elementoPai = document.querySelector('#container-principal');

elementoPai.insertBefore(novoElemento, elementoAlvo);



/*

<div id="container-principal">
        <p>Algum texto</p> // aqui está nossa inserção antes do titulo principal
        <h1 id="titulo-principal">Algum título</h1>
        <p>Algum texto no parágrafo</p>
    </div>

*/