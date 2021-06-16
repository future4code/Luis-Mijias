// console.log ("Hello world!")




// // - **Exercícios de interpretação de código**

// //     1.  Indique todas as mensagens impressas no
// //      console, **SEM EXECUTAR o programa**.

//         ```jsx
//         let array 
//         console.log('a. ', array)

//         RESPOSTA : Acredito irá dara erro pois nao tem 
//         valor na variavel array.

//         array = null
//         console.log('b. ', array)4
//         RESPOSTA: Acredito que irá aparecer a letra b seguida 
//         um posnto depois vazio assim --> b.

//         array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//         console.log('c. ', array.length)

//         RESPOSTA: Acredito que irá aparacecer --> c. 11

//         let i = 0
//         console.log('d. ', array[i])

//         RESPOSTA: Acredito que irá apracer d. 3

//         array[i+1] = 19
//         console.log('e. ', array)

//         RESPOSTA: ESSE REALMENTE NAO ENTENDI

//         const valor = array[i+6]
//         console.log**('f. ', valor)**

//         RESPOSTA: Acretito que irá aparecer
//         ```

    // 2. Leia o código abaixo com atenção 

        // jsx
        // const frase = prompt("Digite uma frase")

        // console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
        

    // Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

    //RESPOSTA: Acredito que irá mostrar a frase  --> "SUBI NUM ÔNIBUS EM MARROCOS", 27.



    //------------------xxx---------------------xxxx----------------------xxxx------------



    // **Exercícios de escrita de código**
    
    // 1. Faça um programa que pergunte ao usuário 
    // seu nome e seu e-mail. Em seguida, imprima na 
    // tela a seguinte mensagem:

//RESPOSTA****
    //const nomeDoUsuario = prompt("Qual o seu nome?")
    //const emailDoUsuario = prompt("Qual o seu e-mail?")

     
    // O e-mail `emailDoUsuario` foi cadastrado
    //  com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

 //RESPOSTA****
    //console.log (["O e-mail",emailDoUsuario,"foi cadastrado com sucesso. Seja bem vinda(o)",nomeDoUsuario])

//     // 2. Faça um programa que contenha um array 
//     // com 5 das suas comidas preferidas, armazenado em
//     // uma variável. Em seguida, siga os passos:

//  //RESPOSTA****   
// const alimentosPreferidos = ["abacate","kiwi","beringela","ovo","queijo"] 

//     // a) Imprima na tela o array completo
//  //RESPOSTA****
// console.log (alimentosPreferidos)
//     // b) Imprima na tela a mensagem
//     //  "Essas são as minhas comidas preferidas: ",
//     //   seguida por cada uma das comidas, **uma embaixo da outra**.
//  //RESPOSTA****    
//  console.log (alimentosPreferidos[0])
//  console.log (alimentosPreferidos[1])
//  console.log (alimentosPreferidos[2])
//  console.log (alimentosPreferidos[3])
//  console.log (alimentosPreferidos[4])

//     // c) Aqui vai um desafio: pergunte ao usuário
//     //  uma comida preferida. Troque a segunda comida da sua
//     //   lista pela inserida pelo usuário. Imprima na tela a nova lista
//  //RESPOSTA****   
//  const comidaPreferidaUsuario = prompt("Qual o seu alimento preferido?")
//  console.log ([alimentosPreferidos[0],comidaPreferidaUsuario,alimentosPreferidos[2],alimentosPreferidos[3],alimentosPreferidos[4]]) 

    // 3. Faça um programa, seguindo os passos:

    // a) Crie um array vazio e guarde-o em uma
    //  variável, chamada `listaDeTarefas`
 //RESPOSTA****
 let espacoEmBranco = []
 const listaDeTarefas = espacoEmBranco

    // b) Pergunte ao usuário 3 tarefas que ele precise 
    // realizar no dia e armazene-as, uma por uma, no array
 //RESPOSTA****
 const tarefa1 = prompt("Escreva sua primeira tarefa do dia.")
 const tarefa2 = prompt("Escreva sua segunda tarefa do dia.")
 const tarefa3 = prompt("Escreva sua terceira tarefa do dia.")
 const tarefasDoDia = [tarefa1,tarefa2,tarefa3]
 espacoEmBranco.push(tarefa1)
 espacoEmBranco.push(tarefa2)
 espacoEmBranco.push(tarefa3)
 console.log (espacoEmBranco)




 // c) Imprima o array na tela
 //RESPOSTA****

 console.log (espacoEmBranco)

    // d) Peça ao usuário que digite o **índice** de
    //  uma tarefa que ele já realizou: 0, 1 ou 2 
 //RESPOSTA****
const numeroEscolhido = Number(prompt('Digite 0, 1 ou 2.'))

    // e) Remova da lista o item de índice que
    //  o usuário escolheu.
 //RESPOSTA****
 espacoEmBranco.splice(numeroEscolhido,1)
    // f) Imprima o array na tela
 //RESPOSTA****
 console.log (espacoEmBranco)
