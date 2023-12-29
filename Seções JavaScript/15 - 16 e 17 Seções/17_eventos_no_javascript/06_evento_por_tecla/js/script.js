window.addEventListener("keydown", function(e){

    if(e.key == "q"){
        console.log("Apertou a letra q");
    } /*else if (e.key == "Enter"){
        console.log("apertou enter");
    }*/

});

window.addEventListener("keyup", function(e){

    if(e.key == "q"){
        console.log("Soltou a letra q");
    } else if (e.key == "Enter"){
        console.log("Soutou enter");
    }
});

// o objeto window é tela de nosso navegador