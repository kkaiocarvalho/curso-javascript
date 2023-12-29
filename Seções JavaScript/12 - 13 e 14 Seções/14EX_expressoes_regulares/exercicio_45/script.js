/*
Exercícios 05
- Crie uma regex que valide nome de usuários no sistema;
- Aceita letras de a-z, _ e -, números de 0-9, mínimo de 3 caracteres e máximo de 16;
- Depois teste;
*/

const validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeUsuario.test("kaiolindo2_")); // true

console.log(validarNomeUsuario.test("KAIOlindo222-")); // false

console.log(validarNomeUsuario.test("kaiolindo222-")); // true

console.log(validarNomeUsuario.test("54a")); // true

console.log(validarNomeUsuario.test("1_")); // false

console.log(validarNomeUsuario.test("kaiosergiokaiosergio")); // false

/*

Vamos quebrar a expressão regular em partes para entender melhor:

^: Este é um âncora que marca o início da string.

(?=.{3,16}$): Isso é chamado de "lookahead assertion" positivo. Ele verifica se a string possui de 3 a 16 caracteres. O . corresponde a qualquer caractere, e {3,16} especifica que deve haver de 3 a 16 desses caracteres. O $ é outra âncora que marca o final da string. Em resumo, esta parte assegura que a string tenha um comprimento entre 3 e 16 caracteres.

[a-z0-9-_]: Este é um conjunto de caracteres que corresponde a qualquer letra minúscula de 'a' a 'z', qualquer dígito de '0' a '9', ou os caracteres underscore (_) e hífen (-). Este conjunto de caracteres representa os caracteres permitidos no nome de usuário.

$: Mais uma vez, esta é uma âncora que marca o final da string.

Portanto, juntando tudo, a expressão regular completa afirma que a string deve começar com um caractere válido (letra minúscula, dígito, underscore ou hífen), seguido por um número de caracteres entre 3 e 16, e que não deve conter nenhum caractere inválido. Isso é útil para validar se um nome de usuário atende a certos critérios de comprimento e caracteres permitidos.

*/