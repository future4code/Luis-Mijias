/*1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

    ```jsx
    let a = 10
    let b = 10

    console.log(b)

    b = 5
    console.log(a, b)
    ```

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

3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem começar com números ou caracteres especiais.

    ```jsx
    let p = prompt("Quantas horas você trabalha por dia?")
    let t = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${t/p} por hora`)
    ```*/ 
    
    

   /* console.log ("Olá Mundo!")
    



const nome = prompt("Qual o seu nome?") 
console.log (nome)*/


//Exercícios

//a
let nome = "luis"
console.log (nome)

//b
let idade = undefined
console.log (idade)

//c
console.log ('tipo de variável da idade:', typeof idade)
console.log ('tipo de variavel do nome:', typeof nome)

//d
//O tipo de variável -idade- apareceu como nuber porque eu nao coloquei entre aspas .
//Já o tipo de variável -nome- apareceu como string porque eu coloquei entre aspas

//e
nome = prompt("Qual o seu nome?") 
console.log (nome)
idade = prompt("Qual a sua idade?") 
console.log (idade)

//f
//primeramente estavam como variável do tipo const e nao deu certo estava dando erro entao mudei para let e undefined para funcionar.

//g
console.log ('Olá'(nome),"você tem" (idade),"anos.Onde" (nome), "e",(idade), "são os valores que o usuário inseriu")






