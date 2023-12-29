let nome = "Kaio";

for(let i = 0; i < 10; i = i + 1){

    if (i == 3){
        nome = "Sergio";
    }

    if (i == 5 && nome == "Sergio"){
        console.log("O nome é Sergio, pode parar");
        break;
    }
    console.log(i);
}