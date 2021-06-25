/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   //  function comprarCarta() {
   //    // Cria array de cartas
   //    const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    
   //    // Cria array de naipes
   //    const naipes = ["♦️", "♥️", "♣️", "♠️"]
    
   //    // Sorteia uma carta
   //    const numero = cartas[Math.floor(Math.random() * 13)]
    
   //    // Sorteia um naipe
   //    const naipe = naipes[Math.floor(Math.random() * 4)]
    
   //    let valor
    
   //    // Verifica se é uma das letras e coloca o valor correspondente na variável valor
   //    if (numero === "A") {
   //      valor = 11
   //    } else if (numero === "J" || numero === "Q" || numero === "K") {
   //      valor = 10









   //    } else { // Se nao for uma das letras, só converte a string para número
   //      valor = Number(numero)
   //    }
    
   //    // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
   //    const carta = {
   //      texto: numero + naipe,
   //      valor: valor
   //    }
    
   //    return carta
   //  }



   //  Essa etapa do projeto consiste em criar um programa que:

   //  1 - Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".

   //  2 - Envia um `confirm`, perguntando ao usuário: "Quer iniciar uma nova rodada?".
  
   //  - 💡 Dica
    
   //      `confirm` é um comando que cria uma caixa com dois botões: `ok` e `cancelar`, permitindo fazer perguntas de "sim" e "não". Caso o usuário responda sim (`ok`) o comando devolve o valor `true`, caso contrário, devolve `false`. Desta forma, podemos usar condicionais para decidir o que fazer em cada caso
    
   //      ```jsx
   //      if(confirm("pergunta de sim ou não")) {
   //         // o que fazer se o usuário clicar "ok"
   //      } else {
   //         // o que fazer se o usuário clicar "cancelar"
   //      }
   //      ```

//--------------xxxx--------------------xxxx-----------------
function comprarCarta() {
   // Cria array de cartas
   const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
 
   // Cria array de naipes
   const naipes = ["♦️", "♥️", "♣️", "♠️"]
 
   // Sorteia uma carta
   const numero = cartas[Math.floor(Math.random() * 13)]
 
   // Sorteia um naipe
   const naipe = naipes[Math.floor(Math.random() * 4)]
 
   let valor
 
   // Verifica se é uma das letras e coloca o valor correspondente na variável valor
   if (numero === "A") {
     valor = 11
   } else if (numero === "J" || numero === "Q" || numero === "K") {
     valor = 10
   } else { // Se nao for uma das letras, só converte a string para número
     valor = Number(numero)
   }
 
   // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
   const carta = {
     texto: numero + naipe,
     valor: valor
   }
 
   return carta
 }

console.log("Boas Vindas ao jogo de Blackjack!") 
      if(confirm("Quer iniciar uma nova rodada?")){
        let cartasUsuario = [comprarCarta(),comprarCarta()]
        if (cartasUsuario[0].valor && cartasUsuario[1].valor === 11){
           cartasUsuario = [comprarCarta(),comprarCarta()]
        }
        let somaCartaUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor 

        let cartasComputador = [comprarCarta(),comprarCarta()]
        if (cartasComputador [0].valor && cartasComputador[1].valor === 11){
           cartasComputador = [comprarCarta(),comprarCarta()]
        }

        let somaCartaComputador = cartasComputador[0].valor + cartasComputador[1].valor 

        console.log(`Usuário - cartas : ${cartasUsuario[0].texto} , ${cartasUsuario[1].texto}    ${somaCartaUsuario} ` )
        console.log(`Computador - cartas : ${cartasComputador[0].texto} - pontuação ${cartasComputador[1].texto}`)



         
   
    }else{
       console.log("O jogo acabou!!!")
      
      }

    
   //  3 - Se o usuário responder `cancel`, imprime uma mensagem no console "O jogo acabou".
    
   //  4 - Se o usuário responder `Ok`, o programa deve iniciar uma nova rodada.



