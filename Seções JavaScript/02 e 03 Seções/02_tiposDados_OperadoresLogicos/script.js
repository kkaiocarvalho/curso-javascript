// tipo number
console.log(typeof 5);
console.log(typeof 12.5);
console.log(typeof -123);

//NUMBERS: ARITMÉTICA
console.log("NUMBERS: ARITMÉTICA")
console.log(typeof(2 + 3));
console.log(typeof(5 - 12));
console.log(typeof(4 * 4));
console.log(typeof(5 / 3));
console.log(typeof(21 % 2));
console.log(typeof(21 % 2));
console.log(typeof(5 + ( 2 * 4 )));
// (+ soma)(- subtr.) ( / divisão) ( * mult.) ( % resto) 

//Numbers: Special Numbers ( infinity ) ( -infinity ) ( NaN (Not a Number))
console.log("Numbers: Special Numbers")
console.log(typeof(Infinity));
console.log(typeof(-Infinity));
console.log(typeof(NaN));


//tipo String    (String = texto) 
console.log(typeof'isso é uma string'); 
console.log(typeof "esse texto também é uma string"); 
console.log(typeof `e esse também é uma string`); //(template literals) 

//strings: detalhes mais tecnicos
console.log("strings: detalhes mais tecnicos")
console.log("Primeira linha \nSegunda linha");
console.log("O meu nome é 'Kaio'");
console.log('O meu nome é "Lívia"');
console.log(`A multi´licação de 5 por 3 é ${5*3}`);
console.log("O " + "meu" + " nome " + "é" + " Kaio.");

//BOOLEANS (True = verdadeiro // False = falso)
console.log("Booleans");
console.log(typeof true);
console.log(typeof false);
console.log(typeof (10 > 2));
console.log(typeof (5 > 200));

//Booleans: comparações -> (Maior que: >) (Menor que: <) (Maior ou igual: >=) (Menor ou igual: <=) (Igual: ==) (Diferente: !=) (Idêntico: ===) 
console.log("Booleans: comparações");
console.log(1 > 2);
console.log(5 < 10);
console.log(3 >= 3);
console.log(5 <= 4);

console.log(5 == 4);
console.log('Kaio' != 'Kaio');
console.log(3 === '3');
console.log(4 === 4);


//Booleans: operadores lógicos (&& || !)
// && = and (para ser true, os 2 lados da comparação precisam ser true)
// || = or (para ser true, basta 1 lado da comparação ser true)
// ! = not (inverte os valores (true vira false e false vira true))
console.log("Booleans: operadores lógicos (&& || e !)");
console.log(5 > 3 && 3 == 2);
console.log(5 > 3 || 3 == 1);

console.log( 3 == 3 && "Kaio" == "Kaio");
console.log("Sergio" == "Kaio" || false);

console.log(!(!(true && true)));

console.log(true && true);
console.log(false || false);

//Booleans: operador ternário
console.log("Booleans: operador ternário");
console.log(5 > 2 ? 'É sim' : 'É não');
console.log(false ? 5 : 4);
console.log("Kaio" == "Kaio" ? "Olá Kaio!" : "Não é o Kaio");

//Empty Values (undefined e null)
console.log("Empty Values");
console.log(null);
console.log(undefined);

//Conversão de tipo automática
console.log("Conversão de  tipo automática");
console.log(typeof("123" + 4)); // string // sem o typeof = 1234
console.log(typeof("30" - 20)); // number // sem o typeof = 10
console.log(typeof("ausd" * 3)); // number // sem o typeof = NaN

console.log(5 * null); // 0
console.log("5" - 3); // 2
console.log("5" + 1); // 51
console.log("dois" * "três"); // NaN


