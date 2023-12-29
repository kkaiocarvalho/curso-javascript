let x = 10;

if(x > 5){
    let x = 20;
    x++;
    console.log("Escopo do if: " + x);
}
console.log("Escopo global: " + x);

