let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

input1.addEventListener("focus", function(){
    console.log("Entrou no input1");
});

input1.addEventListener("blur", function(){
    console.log("Saiu no input1");
});

input2.addEventListener("focus", function(){
    console.log("Entrou no input2");
});

input2.addEventListener("blur", function(){
    console.log("Saiu no input2");
});