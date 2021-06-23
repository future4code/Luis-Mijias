// Exercícios de interpretação de código

// 1. Leia o código abaixo:

//    ```jsx 
//     const respostaDoUsuario = prompt("Digite o número que você quer testar")
//     const numero = Number(respostaDoUsuario)

//     if (numero % 2 === 0) {
//       console.log("Passou no teste.")
//     } else {
//       console.log("Não passou no teste.")
//     }
//     ```

//     a) Explique o que o código faz. Qual o teste que ele realiza? 

//RESPOSTA : O código pede para o usuário digitar um numero no prompt e analisa se este número é par ou ímpar.

//     b) Para que tipos de números ele imprime no console "Passou no teste"? 
// RESPOSTA: Para tipos de número par.
//     c) Para que tipos de números a mensagem é "Não passou no teste"?

// RESPOSTA : Para tipos de número ímpar.

// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

//     a) Para que serve o código acima?

//RESPOSTA: Serve para mostrar o preço das frutas.

//     b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

//RESPOSTA: O preço da fruta  Macã  é  R$  2.25

//     c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

//RESPOSTA: Pelo que eu entendi o será impresso: O preço da fruta  Pêra  é  R$  5 - pois o valor de 5.5 seria substituido pelo valor de 5 que foi o ultimo antes do ultimo break.

// 3. Leia o código abaixo:
// ```jsx
// // const numero = Number(prompt("Digite o primeiro número."))

// // if(numero > 0) {
// //   console.log("Esse número passou no teste")
// // 	let mensagem = "Essa mensagem é secreta!!!"
// // }

// // console.log(mensagem)  
//```

//     a) O que a primeira linha está fazendo?
// Declarou uma constante chamada número que será digitada no prompt.
//     b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

//RESPOSTA: "Esse número passou no teste"
           

//     c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//RESPOSTA : Para mostrar a mensagem secreta o console.log deveria estar dentro do  escopo do if.

//----------------xxxxx------------------xxxxx-----------


// - **Exercícios de escrita de código**
//     1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//         a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

//RESPOSTA: const recebeIdade = prompt("Digite sua Idade")

//         b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

//RESPOSTA:const recebeIdade = Number(prompt("Digite sua Idade"))

//         c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
//console.log("oi")
//RESPOSTA: 

// const idade = Number(prompt('Digite sua idade!'))

// if(idade >= 18) {
//   console.log('Voce pode dirigir!!!')
// }else{
//   console.log('Você não pode dirigir')
// }


// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
//     - 💡 Dica

//         Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
//         Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)

//         Se o usuário digitar "V", a saída deve ser:

//         ```
//         "Boa Tarde!"
//         ```

// RESPOSTA

// const turno = prompt("Digite o turno que você estuda **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno).")

// if(turno === "M") {
//   console.log("Bom Dia!")
// } else if(turno === "V") {
//   console.log("Boa Tarde!")
// } else if(turno === "N"){
//   console.log("Boa Noite")
// } else {
//   console.log("Inválido")
// }

// 3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
//     - 💡 Dica

//         Lembre-se que o switch case é como se fosse um if, mas ele verifica APENAS IGUALDADES ESTRITAS (`===`)

//RESPOSTA:

// const turno1 = prompt("Digite o turno que você estuda **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno).")


// switch(turno1) {
//   case 'M':
//     console.log('Bom Dia!')
//     break
//   case 'V':
//     console.log('Boa Tarde')
//     break
//   case 'N':
//     console.log('Boa Noite')
//     break
//   default:
//     console.log('Digite M, V ou N , este comando é invalido!')
// }

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

//RESPOSTA:


// const generoDoFilme = prompt("Escolha o gênero do filme")
// const precoDoIngresso= prompt("Qual o valor do ingresso")

// if(generoDoFilme === "fantasia" && precoDoIngresso <= 15) {
//   console.log('Bom filme')
// } else {
//   console.log('Escolha outro filme :(')
// }



//----------------xxxx----------------------

//DESAFIO

// 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem `"Bom filme!"`, pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`, trocando [LANCHINHO] pelo que o usuário colocou no input.
//     - Exemplo

//         Entradas: `"fantasia"` | `"10"`

//         Saída:

//         ```
//         [prompt] Qual snack que você quer comprar?
//         ```

//         Entrada: `"chocolate"`

//         Saída:

//         ```
//         "Bom filme!"
//         "Aproveite o seu chocolate"
//         ```

//RESPOSTA:

// const generoDoFilme = prompt("Escolha o gênero do filme")
// const precoDoIngresso= prompt("Qual o valor do ingresso")
// //const lanchinho = prompt("Qual lanchinho você vai comprar?")

// if(generoDoFilme === "fantasia" && precoDoIngresso <= 15) {
//   const lanchinho = prompt("Qual lanchinho você vai comprar?")
//   console.log(`Bom filme e aproveite sua ${lanchinho}`)
  
// } else {
//   console.log('Escolha outro filme :(')
// }

// Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos

// O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

// - Tabela de Preços

//     ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd2f55f6-e07f-45fd-9b65-ecf0343a3b3c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd2f55f6-e07f-45fd-9b65-ecf0343a3b3c/Untitled.png)

// - Exemplo de saída: Jogo Nacional

//     ```
//     ---Dados da compra--- 
//     Nome do cliente:  Soter Padua 
//     Tipo do jogo:  Nacional 
//     Etapa do jogo:  Final 
//     Categoria:  1 
//     Quantidade de Ingressos:  10 ingressos 
//     ---Valores--- 
//     Valor do ingresso:  R$ 1980
//     Valor total:  R$ 19800

//     ```

// - Exemplo de saída: Jogo Internacional

//     ```
//     ---Dados da compra--- 
//     Nome do cliente:  Soter Padua 
//     Tipo do jogo:  Internacional 
//     Etapa do jogo:  Final 
//     Categoria:  1 
//     Quantidade de Ingressos:  10 ingressos 
//     ---Valores--- 
//     Valor do ingresso:  U$ 482.92682926829275
//     Valor total:  U$ 4829.2682926829275

//     ```









