/*1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

    ```jsx
    let a = 10
    let b = 10

    console.log(b)

    b = 5
    console.log(a, b)
    ```
RESPOSTA : primeira linha = 10
           segunda linha  = 10 , 5 
2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

    ```jsx
    let a = 10
    let b = 20
    let c
    c = a
    b = c
    a = b

    console.log(a, b, c)
    ```
    RESPOSTA: Irá Acontecer um erro pois o C não foi declado.

3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem começar com números ou caracteres especiais.

    ```jsx
    let p = prompt("Quantas horas você trabalha por dia?")
    let t = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${t/p} por hora`)
    ```
    RESPOSTA: Irá mostrar quanto o usuário recebe por hora.
              sugestões: p=horasDiarias
                        t=salarioDiario

    
    */ 
    
    

// console.log ("Olá Mundo!")
    





// //Exercício 1

// //a
// let nome = "luis"
// console.log (nome)

// //b
// let idade = undefined
// console.log (idade)

// //c
// console.log ('tipo de variável da idade:', typeof idade)
// console.log ('tipo de variavel do nome:', typeof nome)

// //d
// //O tipo de variável -idade- apareceu como nuber porque eu nao coloquei entre aspas .
// //Já o tipo de variável -nome- apareceu como string porque eu coloquei entre aspas

// //e
// nome = prompt("Qual o seu nome?") 
// console.log (nome)
// idade = prompt("Qual a sua idade?") 
// console.log (idade)

// //f
// //primeramente estavam como variável do tipo const e nao deu certo estava dando erro entao mudei para let e undefined para funcionar.

// //g
// console.log ("Olá",nome,"você tem",idade,"anos.")

//Exercício 2

//a
// const pergunta1 = "Você está usando vermelho hoje?"
// const pergunta2 = "Você gosta de viajar?"
// const pergunta3 = "Você gosta de programar?"

// const resposta1 = prompt(pergunta1)
// const resposta2 = prompt(pergunta2)
// const resposta3 = prompt(pergunta3)

// console.log (pergunta1, "-", resposta1)
// console.log (pergunta2, "-", resposta2)
// console.log (pergunta3, "-", resposta3)

//exercício 3

let a = 10
let b = 25

let c 

c = a     // c = 10
a = b     // a = 25
b = c     // b = 10

console.log("a", a)
console.log("b", b)
 








