/*window.addEventListener("load", function(){
    alert("Assine nossos termos de uso!");
});
*/

window.addEventListener("beforeunload", function(e){
    e.returnValue = null;
}); // vai me perguntar se quero atualizar o site, entre outras coisas tbm 