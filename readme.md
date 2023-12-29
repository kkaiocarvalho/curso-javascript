<h2>O que é um programa/software?</h2>

- É um conjunto de declarações (statements);
- Statements são conjuntos de espressões (expressions);
- Expression é todo fragmento de código que produz um valor;
- Software tem um 'objetivo';
- Statements 'guiam o software para seu objetivo;
- Expressions são os valores que os statements esperam para guiar o software;
- Nós já vimos statements e expressions de forma simples;
- Statements: console.log(1 > 2);
- Expression: console.log('batata');
- Porém ainda não é o suficiente para criar um software;
- E é essa junção dos conceitos nosso objetivo nesta seção;

<h2>Como salvar valores na memória</h2>

- Salvamos os valores em variáveis (isso é um statement);
- let laranjas = 5;
- E depois podemos criar espressões com os valores salvos;
- console.log(laranjas * laranjas);
- console.log(`Tem ${laranjas} na sexta`);
- Podemos também mudar o valor que foi salvo anteriormente;
- laranjas = laranjas + 1;
- console.log(laranjas);
- Um let pode definir várias variáveis também;
- let quadrado = 4, triangulo = 3, retangulo = 4;
- console.log(quadrado * (triangulo + retangulo));

<h2>Outras maneiras de salvar valor</h2>

- Podemos definir valores com var e const;
- var nome = 'Kaio Sergio';
- console.log(nome);
- const sobrenome = 'Carvalho';
- console.log(sobrenome);
- Var é uma forma mais antiga, você deve optar por let ou const;
- const vem de constante, ou seja, o seu valor não pode ser alterado;

<h2>Convenção no nome das variáveis</h2>

- Não pode começar com um número (let 2teste);
- Mas pode terminar com número (let teste9 = 'testando');
- Pode ter $ ou _, mas não outros caracteres especiais (let $nome, _nome);
- Mas não pode ter pontuação ou outros especiais (let Nome = 'Kaio');
- Ou usar camelCase (let meuPrimeiroNome = 'Kaio');

<h2>Nomes de varáveis reservados</h2>

- Alguns nome não podem ser utilizados para iniciar variaveis, veja:
    > break case catch class const continue debugger default delete do else enum export extends false finally for function if implements import interface in instance let new package private protected public return static super switch this throw true try typeof var void while with yield
- Ex: let break = 'parar';
- Porém podemos usar elas + algumas palavra/digito:
- Ex: let breakKaio = 1;

<h2>Como funciona o ambiente</h2>

- Quando qualquer programa é iniciado, um ambiente é criado;
- E este ambiente não inicia vazio;
- Ele contém funções nativas da linguagem;
- Funções são blocos de código, que nos retornam um valor ou ação;
- o ambiente de JavaScript, neste curso, poderiamos entender como o navegador;

<h2>A estrutura de uma função</h2>

- Antes de mais nada: funções são chamadas durante o programa;
- Você também pode ouvir: executar, chamar, invocar uma função;
- E nós chamamos a função ultilizando o nome dela + abrindo e fechando parênteses;
    > nomeDaFuncao();
- Também podemos inserir parâmentros, em algumas funções são obrigatórios;
- Basicamente são valores que podem mudar o resultado da função;
    > nomeDaFuncao(paramentro1, paramentro2);

<h2>Função built-in: prompt()</h2>

- Recebe um input do usuário do sistema e pode guardar este valor;
- Ex let idade = prompt('Qual a sua idade?');
- console.log(idade);
- Esta função é pouco utilizada;

<h2>Função built-in: alert()</h2>

- Exibe uma mensagem na tela do usuário;
- Ex: alert('Veja esta mensagem!');
- Esta função é pouco utilizada;

<h2>Função built-in: Math.X()</h2>

- Função utilizada para expressões/cálculos matemáticos;
- Ex: let maiorNumero = Math.max(1,5,2,3);
- console.log(maiorNumero);
- Esta função é muito utilizada;

<h2>Função built-in: console.log()</h2>

- Exibe uma mensagem na tela, que é argumento que passamos;
- Ex: console.log("Exibindo esta mensagem!!);
- Esta função é muita utilizada;
- Veremos como fazer as nossas funções mais a frente;

<h2>O que são estruturas de controle?</h2>

- Um programa é executado de cima para baixo;
- Com as estruras podemos modelar o fluxo do programa;
- Ou seja, dependendo dos valores de statements e expressions, ele tomará um caminho diferente;

<h2>O que são estruturas de repetição</h2>

- A ideia é repetir uma ação até atingir uma condição;
- Ao invés de repetirmoso mesmo código várias vezes, criamos um statementque fará uma checagem em cada loop;
- Também chamada de loop;

<h2>Estrutura de repetição: While</h2>

- Fará uma ação, até que a condição seja atingida;
- Precisamos realmente 'definir um fim' para o loop, para não termos o problema de loop infinito;

<h2>Estrutura de repetição: do while</h2>

- Semelhante ao while, porém a estrutura muda um pouco;
- Este método quase não é utilizado;

<h2>Estrutura de repetição: for</h2>

- Semelhante ao while, porém amplamente utilizado;
- A estrutura de repetição mais fácil de compreender;

<h2>Estrutura condicional: switch</h2>

- Quando há a necessidade de vários ifs, podemos utilizar o switch/case;
- Para sair de um case podemos utilizar o break;
- Podemos inserir uma expressão default, para caso nenhum Valor for correspondido;

<h2>O que são funções?</h2>

- Funções são estruturas de código menores que são reaproveitadas durante a execução / construção de um programa;
- Principal objetivo: poupar repetição de código;
- Podem ser consideradas 'subprogramas';

<h1>Definindo uma função</h2>

- Uma função tem um estrutura um pouco mais complexa;
- Devemos declarar a função sempre com a palavra function;
- Uma função deve ter nome;
- Pode conter argumentos/parâmetros, definidos entre ();
- O corpo da função é definido entre {};
- Geralmente uma função retorna um valor;
- É possivel declarar funções em variáveis;
    Declarando na pratica:

        function escrevendoNoConsole(){
            console.log("Escrevendo no console!");
        }
        escrevendoNoConsole();

        const textoNoConsole = function(){
            console.log("Texto no console!");
        }
        textoNoConsole();

        const textoPorParametro = function (texto){
            console.log(texto);
        }
        textoPorParametro("Testando por parâmetro!");

<h2>O escopo de uma função</h2>

- O que acontece dentro de um função fica separado do escopo global;
- O escopo global seria todo o arquivo JavaScript;
    Exemplo:

        let n = 10;
        const numero = function () {
            let n = 25;
            console.log(25);
        }
        console.log(n);

<h2>Mais sobre escopo</h2>

- Atualmente com let e const, qualquer bloco de código pode separar seu escopo (um if por exemplo);
- Isso é muito bom pois separa os contextos, com var isso não acontencia;
- Ou seja, podemos ter escopos diferentes não só com funções;
    Exemplo:

        let x = 10;
        if(true) {
            let x = 20;
            console.log(x); // escopo if
        }
        console.log(x); // escopo global

<h2>Arrow Functions</h2>

- Uma outra forma de escrever funções;
- Bem utilizada nos frameworks modernos;
- Porém não deve substituir as functions por completo;
    Exemplo:

        const parOuImpar = (n) => {
            return n % 2;
        };
        console.log(parOuImpar(3));
    
<h2>Mais sobre Arrow Functions</h2>

- Se só tem um parâmetro podemos remover os parênteses do argumento e o return;
- Se a expressão for pequena pode até ser feita em uma linha sem prejudicar a leitura do código;
    Exemplo:

        const raizQuadrada = n => n * n;

<h2>Closure</h2>

- uma função que se lembra do ambiente em que ela foi criada;

<h2>Recursion</h2>

- Uma funcionalidade que permite um função se chamar novamente;
- Isso pode ser um problema caso a função se chame muitas vezes;

<h2>Arrays</h2>

- Possibilidade de adicionar um conjunto de valores a uma variavel;
- O array deve ser escrito entre colchetes, separando os valores por virgulas;
- Podemos acessar um array pelo seu indice, por exemplo: arr[1];
- Lembrando que o primeiro índice sempre é 0, ou seja, para acessar o primeiro elemento: arr[0];

<h2>Propriedades</h2>

- Propriedades são informações que podem ser verificadas de um valor;
- Quase todos os valores JavaScript tem propriedades, menos null e undefined;
- Podemos acessar as propriedades de duas maneiras;

<h2>Métodos</h2>

- Métodos são propriedades que funcionam como funções;
- Strings e arrays contém métodos;

<h2>Objetos</h2>

- Uma coleção de propriedades, parecidos com arrays;
- Podemos acessar estas propriedades;
    Exemplo:

        let pessoa = {
            nome: "Kaio",
            profissao: "Estudante/Dev",
            idade: 20,
        }
        console.log(pessoa.nome);
        console.log(pessoa.idade);

- Podemos adicionar e deletar propriedades ao longo do nosso programa;
- Podemos copiar todas as propriedades de um obj para outro;
    Exemplo:

        let objA = {
            prop1: 'teste',
            prop2: 'testando',
        }
        let objB = {
            prop3: 'propriedade'
        }
        Object.assign(objA, objB);
        console.log(objA);

- E também podemos verificar quais as chaves cada objeto possui:
    Exemplo:

        let objA = {
            prop: 'teste',
            prop2: 'testando',
        }
        console.log(Object.keys(objA));

<h2>Mutação</h2>

- Um objeto pode herdar todas as características do outro, virando uma referência ao mesmo;
    Exemplo:

        let objA ={
            pontos: 10
        };

        objB = objA;

        let objC ={
            pontos: 10
        };

        console.log(objA == objB); //true
        console.log(objA == objC); //false

<h2>Loops em Arrays</h2>

- Uma técnica muito utilizada na programação é o loop nos arrays;
- Como é uma lista com muitos valores, muitas vezes precisamos ver cada um deles;
    exemplo:

        let numeros = [1,5,10,15,20,25];
        for(let i = 0; i <= numeros.length; i++){
            console.log(numeros[i]);
        }

<h1> Métodos</h1>

<h2>Métodos de arrays: push e pop</h2>

- push: insere um valor no final do array
- pop: remove o ultimo valor do array
    exemplo:

        let pessoas =["Kaio","Rosana","Sergio","Livinha"];
        let pessoaRemovida = pessoas.pop();
        console.log(pessoas);
        console.log(pessoaRemovida);

<h2>Métodos de arrays: shift e unshift</h2>

- shift: remove o primeiro elemento de um array;
- unshift: adiciona um ou mais elementos no início de um array;
    exemplo:

        let frutas = ["Maçã", "Melão", "Uva"];
        let frutaRemovida = frutas.shift();
        console.log(frutras);
        console.log(frutasRemovida);

<h2>Métodos de array: indexOf e lastIndexOf</h2>

- indexOf: encontra o índice de um determinado elemento;
- lastIndexOf: encontra o último índice de um elemento;
    exemplo:

        let numeros = [0, 1, 2, 1, 0];
        console.log(numeros.indexOf(1));
        console.log(numeros.lastIndexOf(1));

<h2>Métodos de array: slice</h2>

- Retorna um array a partir de outro array;
- O array retornado é determinado pelos parâmetros que são os índices de início e fim do novo array;
    exemplo:

        let numeros = [0, 1, 2, 3, 4, 5];
        console.log(numeros.slice(2,3));
        console.log(numeros.slice(3));

<h2>Métodos de array: forEach</h2>

- itera cada elemento do array;
    exemplo:

        const nums =[1,2,3,4,5,6];
        nums.forEach(num =>{
            console.log(num);
        });

<h2>Métodos de array: includes</h2>

- Verifica se o array tem um determinado elemento;
    exemplo:

        let carros = ["BMW", "Fiat", "Audi"];
        console.log(carros.includes("Fiat"));

<h2>Métodos de array: reverse</h2>

- Inverte um array;
    exemplo:

        let arr = [1,2,3,4,5,6,7,8,9,10];
        console.log(arr.reverse());

<h2>Métodos de string: trim</h2>

- Remove tudo que não é string
    exemplo: 

        let texto = ' \n teste \n ';
        console.log(texto.trim());

<h2>Método de string: padStart</h2>

-Inserir caracteres antes da string;
    exemplo:

        let milAoContrario = '1';
        console.log(milAoContrario.padStart(4, "0"));

<h2>Método de string: split</h2>

- Divide uma string por um separador, e retorna um array;
    exemplo:

        let frase = "O rato roeu a roupa do rei de roma";
        let palavras = frase.split(" ");
        console.log(palavras);

<h2>Método de string: join</h2>

- Junta elementos em um array em uma frase, por meio de um separador;
    exemplo:

        let fraseMontada = palavras.join('<->');
        console.log(fraseMontada);
        
<h2>Método de string: repeat</h2>

- Repete uma string de acordo com um parâmetro number
    exemplo: 

        console.log('teste'.repeat(5));
        
<h2>Rest Operator</h2>

- Uma forma de uma função receber indefinidos parâmetros;
- O operador rst vai virar um array;
- O parâmetro é definido por: ... nome;
    exemplo:

        function imprimirNumeros(...args){
            for(let i = 0; i < args.lengt; i++){
                console.log(args[i]);
            }
        }

<h2>Destructuring com objetos</h2>

- Podemos definir variáveis com propriedades do objeto com uma notação diferente, chamada destructuring;
    exemplo:

        const person = {
            name: 'Jhon',
            lastname: 'Doe'
        }

        const{name: fname, lastname: lname} = person;
        console.log(fname);
        console.log(lname);

<h2>Destructuring com array</h2>

- Podemos definir variáveis com os valores de um array  utiliazndo o destructuring;
    exemplo: 

        let nomes = ['Kaio', 'Livinha', 'Rosana', 'Sergio'];
        let [nomeA, nomeB, nomeC, nomeD] = nomes;

        console.log(nomeA);
        console.log(nomeB);
        console.log(nomeC);
        console.log(nomeD);

<h2>JSON</h2>

- JSON = JavaScript Object noatation;
- Utilizado para comunicação entre serviços, ex: back-end <-> front-end;
- Basicamente um tipo de dado padronizado, que le,bra muito os objetos do JavaScript
    exemplo:

        {
            "name": "Kaio",
            "age": 20,
            "position": "Student",
            "languages": ["JavaScript", "Python", "Java"]
        }
- Rigoroso na estrutura, ou seja, você deve seguir o padrão imposto por este formato;
- Apenas aspas duplas;
- Não aceita comentários;

<h2>JSON para String</h2>
    
- Podemos converter o JSON para uma string de forma fácil;
- Ou também um astring para JSON;
    exemplo:

        const car = {
            "brand": "BMW",
            "wheels": 4,
            "doors": 2,
            "type": "Sedan"
        }

        let jsonToString = JSON.stringfy(car);
        console.log(jsonToString);

        let stringToJson = JSON.parse(jsonToString);
        console.log(stringToJson);

<h1> Conceitos de orientação a objetos </h1>

<h2> O que é orietação obejtos? </h2>

- Uma forma de programar, que utiliza os objetos como o seu principal princípio;
- Além de utilizar conceitos e técnicas que envolvem obejtos;
- A maioria dos softwares, na parte de back-end, são desenvolvidos em cima desse paradigma;
- Grandes frameworks se aproveitam desta técnica: Laravel, Django e etc.

<h2>Métodos </h2>

- Propriedades que servem como funções;
- Ou seja, as ações dos objetos;
- Invocamos os métodos da mesma maneira que funções;
    Exemplo:

        let cachorro = {
            latir: function(){
                console.log("Au au");
            }
        }
        cachorro.latir();

- Normalmente os métodos interagem com os objetos;
- Até mudando os valores das suas propriedades para corresponder a lógica do programa desenvolvido;
    Exemplo:

        let pessoa = {
            nome: '',
            setNome: function(novoNome){
                this.nome = novoNome;
            },
            getNome: function(){
                return this.nome;
            }
        }
        pessoa.setNome("Kaio");
        console.log(pessoa.getNome());

<h2>Prototypes</h2>

- Um objeto fallback de outro objeto;
- Quando um objeto recebe uma requisição de uma propriedade que não tem, ela procura no prototype deste objeto;
- O prototype de um objeto criado do zero é o Object, que tem os métodos nativos da linguagem;
    Exemplo:

        let pessoa = {
            maos: 2
        }
        console.log(Object.getPrototypeOf(pessoa));
        console.log(Object.getPrototypeOf(pessoa) == Object.prototype);

- Quando criamos um objeto a partir de um outro, o abse será o prototype;
- Ele herdará tanto os métodos e propriedades de Object (o prototype do objeto base);
- Quando os do objeto base para este novo;
    Exemplo:

        let pessoa = {
            maos: 2
        }

        let pessoaNova = Object.create(pessoa);

        console.log(pessoaNova.maos);
        console.log(Object.getPrototypeOf(pessoaNova) === pessoa);

<h2>Classes</h2>

- O prototype do javaScript pode ser chamado de classe;
- Pois nas outras linguagens uma Class é um molde de um objeto;
- Ou seja, podemos criar divesos objetos em cima de um prototype;
    Exemplo:

        let cachorro = {
            raca: 'SRD',
        }

        let pastorAlemao = Object.create(cachorro);
        pastorAlemao.raca = 'Pastor Alemão';
        console.log(pastorAlemao.raca);
    
<h2>Classes: construtor por função</h2>

- Construtores são formas de instanciar uma classe em uma linguagem de programação;
- Instanciar = criar um objeto novo;
- No construtor já podemos definir propriedades;
    Exemplo:

        function criarCachorro(raca){
            let cachorro = Object.create({});
            cachorro.raca = raca;
            return cachorro;
        }
        let doberman = criarCachorro('Doberman');

        console.log(doberman.raca);

<h2>Classes: construtor por new</h2>

- Em muitas linguagens temos a possibilidade de instanciar um objeto com new, no JS também;
    Exemplo:

        function Cachorro(raca){
            this.raca = raca;
        }

        let husky = new Cachorro('Husky');
        console.log(husky.raca);

<h2>Classes: construtor com método</h2>

- Além de propriedades, podemos criar a classe já com métodos;
- Basta definir ao prototype ométodo desejado;
    exemplo:

        function Cachorro(raca){
            this.raca = raca;
        }
        Cachorro.prototype.uivar = function(){
            console.log('Auuuuuuuuuu');
        }

        let pug = new Cachorro('Pug');
        console.log(pub.raca);
        pug.uivar();

<h2>Construtor na classe (ES6)</h2>

- Com a versão do ES6, uma possibilidade de criar uma classe (objeto) com construtor foi adicionada;
- Então não precisamo masi criar por meio de uma função, veja:

    class Cachorro {
        constructor(raca) {
            this.raca = raca;
        }
    }
    let labrador = new Cachorro('Labrador');
    console.log(labrador.raca);

<h2>Mais sobre classes</h2>

- Não podemos adicionar propriedades na classe, só via prototype;
- A classe só aceita métodos;
    Exemplo:

        class Cachorro {
            
            constructor(raca){
                this.raca = raca;
            }

            laitr(){
                console.log("Au au!");
            }
        }

        Cachorro.prototype.patas = 4;
        let poodle = new Cachorro('Poodle');

<h2>Override nas propriedades do Prototype</h2>

- Sempre que adicionamos uma propriedade a um objeto, é criada uma idêntica no prototype;
- Podemos substituir a do prototype;
    exemplo:

        class Cachorro {
            
            constructor(raca){
                this.raca = raca;
            }
        }
        let poodle = new Cachorro('Poodle');
        Cachorro.prototype.raca = 'SRD';
        console.log(poodle.raca);
        console.log(Cachorro.protorype.raca);

<h2>Symbols</h2>

- Propriedades únicas, qu não podem ser alteradas e nem criadas duas vezes;
- Podemos utilizar como uma constante, só que para propriedade de objeto;
    Exemplo:

        class Cachorro {
            constructor(raca){
                this.raca = raca;
            }
        }
        let patas = Symbol();
        Cachorro.prototype[patas] = 4;
        let golden = new Cachorro('Golden Retriever');

<h2>Getters e Setters</h2>

- Get: serve para resgatar o valor de uma propriedade;
- Set: serve para alterar o valor de uma propriedade;
    Exemplo:

        class Cachorro {
            constructor(raca){
                this.raca = raca;
            }

            get verRaca(){
                return 'A raça é' + this.raca;
            }
            set novaRaca(value){
                this.raca = value;
            }
        }

        let golden = new Cachorro('Pastor Alemão');
        console.log(golden.verRaca);
        golden.novaRaca = 'Golden';

<h2>Herança</h2>

- Uma classe pode herdar propriedades de outra classe por herança;
- Para isso utilizamos extends;
    Exemplo:

        class Mamifero {
            constructor(patas){
                this.patas = patas;
            }
        }

        class Cachorro extends Mamifero {
            constructor(patas, raca){
                super(patas, patas);
                    this.raca = raca;           
            }
        }

        let pug = new Cachorro(4, 'Pug');
        console.log(pug);

<h2>Operador instanceof</h2>

- Podemos verificar quem é o pai do objeto utilizando o instanceof;
    Exemplo:

         class Mamifero {
            constructor(patas){
                this.patas = patas;
            }
        }

        class Cachorro extends Mamifero {
            constructor(patas, raca){
                super(patas, patas);
                    this.raca = raca;           
            }
        }
        console.log(new Cachorro instanceof Mamifero);

<h1>Debugs e erros no JavaScript</h1>

<h2>O que é bug e debug?</h2>

- Bug: Problema que ocorre no código, muitsa vezes por erro do programador, que impede o funcionamento correto do mesmo;

- Debug: o ato de resolver bugs encontrados no código ou também a forma que é feita a visualização de valores de variáveis ou fluxo do código;

<h2>Strict mode</h2>

- Deixa o JavaScript mais rigoroso na hora de se programar;
- Deve ser declarado no topo de arquivos ou funções;
- Colocar o strict ajuda você a codificar de forma correta e não vai impedir/limitar nada no seu software ou programar;
- Veja o exemplo de uma variável declarada sem let / const / var:
    "use strict"
    opa = 'teste';      // > Uncaught ReferenceError: opa is not defined at window.onload((index):34)

<h2>Método de debug: console.log</h2>

- Um método bastante utilizado para debug, é o console.log;
- Funcção que estávamos utilizando para mostrar valores no console;
    Exemplo:

        let a = 1;
        let b = 2;

        if(a == 1){
            a= b + 2;
        }
        console.log(a);

<h2>Método de debug: debugger</h2>

- Funcionalidade que para o código qunado atingir a linha debugger;
    Exemplo:

        let a = 1;
        let b = 2;
        if(a == 1){
            a = b + 2;
        }
        for( i = 0; i < b; i++){
            a = a + 2;
        }

        debugger;
        
        if(a > 10){
            a == 25;
        }

<h2>Tratamento de input por função</h2>

- Não podemos controlar os dados que o usuário enviar, então para o bom funcionamento do software, devemos tratar eles;
- Veja um exemplo de tratamento de number:

    function checarNumero(valor){
        let resultado = Number(valor);
        if(Number.isNaN(resultado)){
            return null;
        } else {
            retunr resultado;
        }
    }
    console.log(checarNumero(5));
    console.log(checarNumero('teste'));


<h2>Exceptions</h2>

- Podemos criar erros no programa, caso alguma condição não seja atendida;
- Porém as exceptions abortam o programa, só geram o erro;
    Exemplo:

        let a = 1;
        if(a != 2) {
            throw new Error("O valor de a não pode ser 1");
        }

<h2>Try e catch</h2>

- O bloco try cacth, vai tentar executar um código, caso não consiga ele pode retornar o erro que esse código gerou;
- Muito útil para debug
    Exemplo:
        
        try {
            let c = a + b;
        } catch(error){
            console.log("Algo deu errado: " + error);
        }

        //Algo deu errado: ReferenceError: is a not defined


<h2>Finally</h2>

- Finally é executada independente do resultado do try/catch;
- E pode existir com try e catch ou apenas try;

try {
    let c = a + b;
} catch(error){
    console.log("Algo deu errado: " + error);
} finally {
    console.log("Executou");
}

<h2>Assertion</h2>

- Verificação no programa, que são utilizadas para assegurar que tudo ocorra de forma esperada;

function iterarArray(arr){
    if(arr.length == 0) {
        throw new Error("O array precisa ter elementos");
    } else {
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
    }
}

<h1>Expressões Regulares</h1>

<h2>O que são expressões regulares?</h2>

- Uma forma de encontrar padrões em uma string;
- Por exemplo: validar se só tem números;
- Em vez de criarmos funções complexax, podemos encontrar dados em texto por meio das expressões regulares;
- Também chamadas de regex;

<h2>Como criar uma expressão regular</h2>

- As expressões regulares no JS são um tipo de objeto;
- Podemos instacia-lo de duas formas;
- New RegExp e /.../;
    Exemplo:

        let reg1 = new RegExp("test");
        let reg2 = /test/;

<h2>Verificando padrões com regex</h2>

- Depois da definição do padrão por meio da regex;
- utilizamos o método test() para verificar se o padrão é retornado;
- Com isso vamos receber de resposta true or false, veja: 

    console.log(/testando/.test("ttttestandooooo")); // true
    console.log(/testando/.test("asdtestasd")); // false

<h2>Conjunto de caracteres</h2>

- Podemos definir um conjunto de caracteres para encontrar por regex;
- Basta por entre [];
- Com um traço podemos definir um intervalo também, veja: 

    console.log(/[123]/.test("Existe 123 aqui?)); // true
    console.log(/[0-9]/.test("o número 8 esta presente aqui?)); // true // 0-9 de 0 a 9

<h2>Caractere especiais</h2>

- \d - Qualquer dígito de caractere
- \w - Um caractere alfanuméico ("teste")
- \s - Qualquer caractere de espaço em branco
- \D - Caracteres que não são dígitos
- \W - Caractere não-alfanumérico
- \S - Caractere que não seja espaço em branco
- . - Qualquer caractere, menos nova linha

<h2>Regex com caracteres especiais</h2>

- Podemos utilizar os caracteres especiais de várias formas, veja:

    let ano = /\d\d\d\d/;
    console.log(ano.test("05"));
    console.log(ano.test("2019"));
    console.log(ano.test("opa"));

    let palavraTresLetras = /\w\w\w/;
    console.log(palavraTresLetras.test("dia"));
    console.log(palavraTresLetras.test("ano"));
    console.log(palavraTresLetras.test("oi"));
    console.log(palavraTresLetras.test("teste"));

<h2>Operador not ^</h2>

- Podemos escrever um set que aceitam tudo, menos alguns caracteres com o not;
- Lembrando que combinações serão aceitas, o negado é apenas se bate com o set;
- Mais adiante aprenderemos negar de outras formas
    Exemplo:

        let pralavrasSem123 = /[^123]/;
        console.log(pralavrasSem123.test("1112"));
        console.log(pralavrasSem123.test("14"));
        console.log(pralavrasSem123.test("1"));

<h2>Operador plus +</h2>

- Quando um + está após alguma espressão, este elemento pode se repetir mais de uma vez;
    Exemplo:

        let muitosOuPoucosDigitos = /\d+/;
        console.log(muitosOuPoucosDigitos.test("123"));
        console.log(muitosOuPoucosDigitos.test("123456789"));
        console.log(muitosOuPoucosDigitos.test(""));
<h2></h2>

<h2>Operador ?(question)</h2>

- Faz com que o dígito anterior seja opcional;
    Exemplo:

        let opcional = /Prova\s?\d?/;
        console.log(opcional.test("Prova"));
        console.log(opcional.test("Prova 1"));
        console.log(opcional.test("Prova 2"));

<h2>Ocorrência precisa</h2>

- Inserir o número de ocorrência entre{};
    Exemplo:

        let telefone = /\d{4,5}-\d{4}/;
        console.log(telefone.test("4004-5050"));
        console.log(telefone.test("99999-8080"));
        console.log(telefone.test("999-999"));
        console.log(telefone.test("9999-9"));

<h2>Método exec</h2>

- O método exec nos retorna um objeto com algumas informações sobre a regex;
- Se nada for encontrado, retorna null;
    Exemplo:

        let teste = /\d+/.exec("O número 100");
        console.log(teste);
        console.log(teste.index);

<h2>Método match</h2>

- O método match funciona de forma similar ao exec;
    Exemplo:

        let teste = "O número 100".match(/\d+/);
        console.log(teste);
        console.log(teste.index);

<h2>Choice pattern</h2>

- Podemos colocar uma instrução na regex que funciona como um || (or) das condicionais;
    Exemplo:

        let frutas = /\d+ (bananas|maçâs|laranjas)/;

        console.log(frutas.test("10 bananas")); // true
        console.log(frutas.test("25 batatas")); // false
        console.log(frutas.test("8 laranjas")); // true

<h2>Na prática: validando um domínio</h2>

- Da seguinte forma, podemos validar um domínio:

    let validarDominio = /www.\w+\.com|com.br/;

    console.log(validarDominio.test("www.google.com"));
    console.log(validarDominio.test("www.teste"));
    console.log(validarDominio.test("teste.com"));
    console.log(validarDominio.test("www.horadecodar.com.br"));

<h2>Na prática: validando e-mail</h2>

- Da seguinte forma, podemos validar um e-mail:

    let validarEmail = /\w+@\w+\.\w+/;

    console.log(validarEmail.test("teste@email.com"));
    console.log(validarEmail.test("email@email"));
    console.log(validarEmail.test("ronaldo@yahoo.com.br"));
    console.log(validarEmail.test("email.com"));
    
<h2>Na prática: validando data de nascimento</h2>

- Da seguinte forma, podemos validar um data de nascimento:

    let validarDataDeNasc =  /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

    console.log(validarDataDeNasc.test('25/12/2015'));
    console.log(validarDataDeNasc.test('25/12/15'));
    console.log(validarDataDeNasc.test('2/2/2015'));
    console.log(validarDataDeNasc.test('30/02/1999'));

<h1>Programação Assíncrona com JavaScript</h1>

<h2>O que é programação assíncrona?</h2>

- Até agora programamos de uma maneira que uma ação acontecia após a outra;
- A programção assíncrona trbalha nesta questão, ações podem ser executadas ao tempo todo sem uma 'fila';
- Um exemplo: usuário está no checkout, manda salvar seu endereço na conta, mas pode prosseguir para a finalização sem recarregar a página, pois adicionar endereço ocorre de forma assíncrona;

<h2>Callbacks</h2>

- Uma das vertentes a prog. Assíncrona é fazer que aconteçam depois de um tempo por meio de callbacks;
- Callback é uma função que faz uma ação após algum acontecimento no código;
- Podemos realizar um callback com a função setTimeout, veja:

    console.log("Ainda não chamou o callback");

    setTimeout(function(){
        console.log("Chamou o callback");
    }, 2000);

    console.log("Ainda não chamou o callback");

<h2>Promises</h2>

- As promises são ações assíncronas que podem produzir um valor em algum momento no código;
- Uma forma de dizer a linguagem que um valor pode estar presente em futuro do código;
- O objeto das promises é Promise, resolve é o método que resolve uma Promise, o then é o que faz ela poder ser executada em um ponto futuro;
    Exemplo:

        let promessa = Promise.resolve(4 + 8);

        console.log('Algum código');

        promessa.then((value) => console.log(`A soma é ${value}`));

<h2>Falha nas Promises</h2>

- Uma promise pode falhar, podemos reter esse erro com método chamado catch;
- Com ele podemos exibir o erro no console, por exemplo, e fazer o debug no código;
    Exemplo:

        let promiseErrada = Promise.resolve(new Error("Algo deu errado"));
        promiseErrada
            .then((value) => console.log(value))
            .catch(reason => console.log("Erro: " + reason));

<h2>Rejeitando Promises</h2>

- Além do resolve, há o método reject;
- Que é quando determinada lógica não satisfaz nosso programa, então podemos ir para outra com o reject, em vez do resolve;
- Resolve e reject terminam a Promise, ou seja, não podemos chamar mais o then, por exemplo:

    function verificaAlgo(num) {
        return new Promise((resolve, reject) => {
            if(num == 2){
                resolve(console.log("O número é 2));
            } else {
                reject(new Error("Falhou"));
            }
        })
    }

    verificaAlgo(3);
    verificaAlgo(2);

<h2>Resolvendo várias Promises</h2>

- Com o método all, podemos resolver várias promessas de uma vez só;
- Ou seja passamos elas pro array e quando a última for resolvida, recebemos a resposta;
    Exemplo:

    const p1 = new Promise(function(resolve, reject){
        setTimeOut(function(){
            resolve(100);
        }, 2000);
    })

    const p2 = Promise.resolve(3);

    const p3 = new Promise(function(resolve, reject) {
        resolve(10);
    });

    Promise.all([p1,p2,p3]).then((values) => console.log(values));

<h2>Async functions</h2>
- Podemos criar funções assíncronas com a palavra reservada async;
- Elas retornam uma Promise;
- Se retornar algo, a promessa é resolvida, se der alguma exception a promessa é rejeitada;

    aync function soma(a,b){
        return a + b;
    }

    somar (2,2). then(function(value){
        console.log(value);
    });

<h2>Await</h2>

- Nas async function, podemos determinar uma instrução await;
- Que vai esperar uma promise ser resolvida, para apresentar os resultados;

    function somaComDelay(a,b){
        return new Promise(resolve => {
            setTimeout(function(){
                resolve(a + b);
            }, 2000);
        });
    }

    async function soma(a,b,c,d){
        let x = somaComDelay(a,b);
        let y = somaComDelay(c,d);

        return await x + await y;
    }

    soma(2,4,6,8).then(x => console.log(x));

<h2>Generators</h2>

- Generators funcionam semelhantes as Promises;
- Onde ações podem ser pausadas e continuadas depois;
- Caracterizados pelo function* e yield, veja:
- O yield pode salvar o estado da variável;

    function* genTest() {
        let id = 0;
        while(true){
            yield id++;
        }
    }

    let criarid = genTest();

    console.log(criarId.next().value);
    console.log(criarId.next().value);
    console.log(criarId.next().value);

<h1>JavaScript no navegador</h1>

<h2>A web: Protocolos</h2>

- Um protocolo é uma forma de comunicação entre computadores através da rede;
- O HTTP, serve para nós solicitarmos arquivos, imagens e etc (Hyper Text Trasfer Protocol);
- Entramos em sites graças ao protocolo HTTP;
- SMTP = protocolos para enviar e-mail;
- TCP = protocolo de transferência;

<h2>A web: URl</h2>

- Cada arquivo que carrega no navegador é nomeado por uma url;
- A URL (Uniform Resource Locator) pode ser dividida em três partes: protocolo, servidor e arquivo;
- http://www.horadecodar.com.br/index.html
- http = protocolo;
- www.horadecodar.com.br = servidor (DNS para um IP);
- index.html = arquivo;

<h2>A web: HTML</h2>

- HTML (HyperText Markup Language) é uma linguagem de marcação;
- Responsável pelos textos e elementos que vamos na tela ao acessar uma página web;
- As tags do HTML criam: títulos, parágrafos, imagens, listas e etc;
- Uma tag é definida por <p></p>;
- Obs.: Algumas tags não possuem fechamento;
- Todo documento HTML tem sempre duas partes importantes: head e body;
- O head serve para configurações do documento, como links de folha de estilo ou até de scripts de JavaScript;
- Tags de configuração: meta, link;
- O body para os elementos (tags), ou seja, a parte visual;
- Tags do body: p, h1, div, ul, li;

<h2>A web: HTML e o JS</h2>

- Podemos utilizar JavaScript no HTML por meio da tag script;
- Ou linkar um arquivo.js por meio de script com o atributo src (forma mais utilizada);
- Algumas tags HTML aceitam atributos que executam JS, mas não é muito utilizado;
- Lembrando que sempre que linkamos um arquivo externo, estamos chamando ele via protocolo HTTP;

<h2>A estrutura HTML e o DOM</h2>

- Quando uma página web é requisitada, ela recebe um texto que é transformado em uma estrutura HTML;
- As tags vão se aninhando uma às outras, formando uma estrutura em que elementos ficam dentro dos outros;
- Essa estrutura tem uma representação exatamente igual para o JS chamada de DOM;
- Que significa Document Object Model;
- E por meio do JS podemos acessar cada um destes elementos do HTML através do DOM;
    Exemplo:

        <!DOCTYPE html>
        <html>
        <head>
        <title>Título do página</title>
        <meta charset='UTF-8'>
        </head>
        <body>
            <div>
                <h1>Título principal</h1>
                <p>Algum texto</p>
            </div>
            <div>
                <h2>Lista de coisas a fazer:</h2>
                <ul>
                    <li>Coisa 1</li>
                    <li>Coisa 2</li>
                    <li>Coisa 3</li>
                </ul>        
            </div>
        </body>
        </html>

<h2>O DOM</h2>

- Podemos mudar completamente uma página HTML atráves do DOM;
- É possivel alterar: elementos, atributos, CSS;
- Além de alterar podemos adicionar e também remover;
- Além de ser possível criar eventos na página, como animações;

<h2>A árvore do DOM</h2>

- O documento HTML seria a árvore completa;
- A raiz da árvore é o document (só a uma raiz);
- Cada elemento da árvore chamamos de node (nó);
- Conteúdos como texto são chamados de leaf nodes (as folhas);

<h2>Movendo-se atráves do DOM</h2>

- Podemos acessar todos os elementos a partir de document.body;
- A partir dele vamos entrando nos childNodes;
- E depois acessando as propriedades que nos interessam;

    console.log(document.body);
    console.log(document.body.childNodes);
    console.log(document.body.childNodes.[1]);
    console.log(document.body.childNodes[1].childNodes[1]);
    console.log(document.body.childNodes[1].childNodes[1].textContent);

        <!DOCTYPE html>
            <html>
            <head>
            <title>Título do página</title>
            <meta charset='UTF-8'>
            </head>
            <body>
                <div>
                    <h1>Título principal</h1>
                    <p>Algum texto</p>
                </div>
                <div>
                    <h2>Lista de coisas a fazer:</h2>
                    <ul>
                        <li>Coisa 1</li>
                        <li>Coisa 2</li>
                        <li>Coisa 3</li>
                    </ul>        
                </div>
            </body>
            </html>


<h2>Encontrando elementos</h2>

- Podemos encontrar elementos de uma forma mais fácil do que se movendo pelo DOM;
- Como no HTML temos tags, classes e ids, o JavaScript nos possibilita utilizar estas características para encontrar o que desejamos;
- Há alguns métodos para isto: getElementByTagName. getElementById, getElementByClassName, e também o querySelector;
- Vamos ver cada um deles em detalhes;

<h2>Encontrando elementos: por tag</h2>

- Utilizamos o seguinte método para encontrar elementos pela tag:
    - document.getElementByTagName('h1');

    Exemplo:

        console.log(document.getElementByTagName('h1'));

<h2>Encontrando elementos: por id</h2>

- Utilizamos o seguinte método para encontrar elementos por id:
    - document.getElementById('algum-id');

    Exemplo:

        console.log(document.getElementById('algum-id'));

<h2>Encontrando elementos: por classe</h2>

- Utilizamos o seguinte método para encontrar elementos por classe:
    - document.getElementByClassName('alguma-classe');

    Exemplo:

        console.log(document.getElementByClassName('teste'));

<h2>Encontrando elementos: por query</h2>

- Um método que se assemelha a grande funcionalidade do jQuerry;
- Nos permitindo encontrar elementos pelo seus seletores de CSS;
- O que facilita muito nossa vida, veja:
    
        console.log(document.querySelector('#algum-id'));
        console.log(document.querySelector('.teste'));
        console.log(document.querySelector('h1'));

<h2>Alterando o HTML</h2>

- Podemos mudar quase tudo atráves do DOM;
- Adicionar, remover e clonar elementos;
- Podemos utilizar métodos como: insertBefore, appendChild e replaceChild;
- Vamos ver em detalhes como utilizar cada um destes;

<h2>ALterando a DOM com insertBefore</h2>

- Insere um nó antes do nó de referência do método;
- Precisamos de um elemento para ser adicionado;
- O elemento que terá o outro elemento adicionado antes dele;
- E o elemento pai destes dois;

        let span = document.createElement("span");
        let el = document.querySelector("h1");
        let pai = el.parentNode;

        pai.insertBefore(span, el);

<h2>Alterando a DOM com appendChild</h2>

- Adiciona um nó após todos os elementos do elemento pai especificado;

        let p = document.createElement("p");
        let el2 = document.querySelector("h1");
        let pai2 = el2.parentNode;

        pai2.appendChild(p);


<h2>Alterando a DOM com replaceChild</h2>

- Repõe um antigo elemento no DOM, com um novo;

        let newHeading = document.createElement('h1');
        newHeading.textContent = 'Novo Texto';
        
        let oldHeading = document.getElementById("old-heading");

        let pai = oldHeading.parentNode;

        pai.replaceChild(newHeading, oldHeading);

<h2>Criando nós de texto</h2>

- Podemos criar um nó de texto puro e inserir em um elemento;

        let texto = document.createTextNode("Este é o texto");

        let p = document.getElementById("p-sem-texto");

        p.appendChild(texto);

<h2>Criando nós de elemento</h2>

- Podemos criar um nó de elemento com o createElement, e depois inserir no HTML;

        let span = document.createElement("span");
        let el =  = document.querySelector("h1");
        let pai = el.parentNode;

        pai.insertBefore(span, el);

<h2>Modificando e lendo atributos</h2>

- Podemos resgatar o valor de um atributo ou trocar com o JS;
- Por exemplo o href de um a ou o src de um elemento img;
- getAttribute pega o valor;
- setAttribute atualiza o valor;

        let url = document.getElementById('link');
        console.log(url.getAttribute('href'));

        url.setAttribute("herf", "www.horadecodar.com.br");
        console.log(url.getAttribute('href'));

<h2>Verificando altura e largura do elemento</h2>

- Com o JS também é possível verificar prorpriedades do elemento como altura e largura, veja:

        let elTeste = document.getElement('titulo');

        console.log(elTeste.offsetWidth);
        console.log(elTeste.offsetHeight);

        console.log(elTeste.clientWidth); // desconsidera bordas
        console.log(elTeste.clientWidth); // desconsidera bordas


<h2>Posição do elemento na tela</h2>

- Também é possível checar a posição do elemento na tela;
- getBoundingClientRect nos da as posições de top, left, right, bottom do elemento e outras informações;

        let elTeste = document.getElementById('titulo');
        console.log(elTeste.getBoundingClientRect());

<h2>Estilizando com JS</h2>

- Podemos também mudar as propriedades de estilo dos elementos do HTML com o JS;
- Acessando a propriedade style podemos fazer as modificações;
- O estilo é manipulado direto na tag, ou seja, substitui o do CSS (na maioria das vezes);

        let p = document.getElementById('algum-p');
        console.log(p.style);
        p.style.color = 'red';

<h2>Selecionar vários elementos com query</h2>

- Para selecionar diversos elementos com query, podemos utilizar o  método querySelectorAll;
- Em vez de um, podemos pegar todos os elementos semelhantes com o seletor do css;

        let todosPs = document.querySelectorAll('p');

        console.log(todosPs);
        console.log(count(todosPs));

<h1>Eventos com o JavaScript</h1>

<h2>O que são eventos?</h2>

- Ações condicionadas a algum tipo de resposta feita pelo usuário;
- Por exemplo: clicks, apertar alguma tecla ou até movimento do mouse;
- Podemos atrelar lógica a essas ações do usuário;
- Por meio de handlers;

<h2>Como acionar um evento</h2>

- Devemos atrelar o evento a um elemento, por exemplo um botão;
- Depois inserir um listener e o tipo de evento como argumento;
- Aí o elemento responderá por este evento e, obviamente, os outros da página não;

        let btn = document.querySelector("#btn");
        btn.addEventListener("click", function(){
            console.log("Clicou");
        });

<h2>Removendo eventos</h2>

- Da mesma forma que podemos adicionar eventos, podemos remover quando acharmos necessário;
- Para isso utilizamos o método removeEventListener, onde passamos o evento e a função que o evento está escutando;

        let btn = document.querySelector("#btn");

        function msg() {
            console.log("Clicou");
        }

        btn.addEventListener("click", msg);

        setTimeout(function(){
            btn.removeEventListener("click", msg);
        }, 300);

<h2>O objeto do evento</h2>

- Quando criamos eventos, temos a opção de utilizar um argumento opcional, que é chamado de objeto do evento;
- Ele contém propriedades que podem ser utilizadas a nosso favor;
- O objeto é criado pelo JavaScript automaticamente;

        function msg(e){
            console.log(e);
        }

        btn.addEventListener("click", msg);

<h2>Propagação</h2>

- Quando não definimos um elemento muito bem (seletor brando) ou um elemento que está dentro de outro tem um evento;
- Pode acontecer a propagação, ou seja, o outro elemento ativar um evento também, aí teremos uma duplicação;
- Por isso temos um método que para esta propagação e resolve este problema, o stopPropagation;

        let p = document.querySelector('p');
        let btn = document.querySelector('button');
        
        p.addEventListener("click", function(){
            console.log("click 1");
        });

        btn.addEventListener("click", function(){
            console.log("click 2");
        })

<h2>Ações default</h2>

- Muitos elementos/ teclas já tem ações pre-determinadas, como clicar num link nos leva a outra página;
- Podemos para este evento default, e criar uma lógica diferente para o elemento em questão;

        let a = document.querySelector('a');

        a.addEventListener("click", function(e) {
            e.preventDefault();
            console.log("Clicou mas não mudou de link");
        });

<h2>Eventos por tecla (key event)</h2>

- Sempre que uma tecla é pressionada, são gerados dois eventos: keyup e keydown;
- Podemos realizar ações nestes eventos também;
- Keyup é quando soltamos a tecla;
- Keydown é quando apertamos;

        window.addEventListener("keydown", function(e){
            if(e.key == "v"){
                console.log("Apertou a letra v");
            }
        });

<h2>Outros eventos de mouse</h2>

- No mouse temos também eventos como mousedown e mouseup, semelhantes aos das teclas;
- Dblclick para com dois cliques;

        btn = document.querySelector("button");

        btn.addEventListener("dblclick", function(){
            console.log("Ativou com double click");
        });

<h2>Movimento do mouse</h2>

- Podemos ativar eventos com a movimentação do mouse também;
- O nome dele é mousemove;
- Atráves desse evento podemos detectar a posição do ponteiro od mouse na tela;

        window.addEventListener('mousemove', function(e){
            console.log(e.x);
            console.log(e.y);
        });

<h2>Eventos por scroll</h2>

- Podemos atrelar evento ao scroll da tela também, pelo evento scroll;
- Por exemplo: podemos criar um elemento assim que o scroll atingir uma posição x;

        window.addEventListener('scroll', function(e){
            if(window.pageYOffset > 100) {
                console.log("Chegou na posição");
            }
        });

<h2>Eventos por foco</h2>

- Quando focamos em um elemento ou saímos dele, podemos também atrelar um evento a esta ação;
- Foucs para quando um elemento recebe foco e blur quando ele perde;

        let input = document.querySelector("input");

        input.addEventListener("focus", function(){
            console.log("foco no input");
        });

        input.addEventListener("blur", function(){
            console.log("Perdeu o foco");
        });

<h2>Evento de Carregamento</h2>

- Podemos atrelar um evento quando a página carrega, pelo evento load;
- E antes do usuário fechar a página pelo evento beforeunload;

        window.addEventListener("beforeunload", function(e){

        })

<h2>Debounce</h2>

- Um evento que dispara múltiplas vezes pode ser um problema para a o computador do cliente;
- Por isso podemos fazer um debounce, que é um suavizador de evento, para não chamar o mesmo tantas vezes;

        window.addEventListener("mousemove", function(){
            clearTimeout(timeout);
            timeout = setTimeout(() => console.log("Debounce!"), 500);
        })

<h2></h2>