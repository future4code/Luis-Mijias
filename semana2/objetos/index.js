// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

//1.  Leia o código abaixo

    //  jsx
    // const filme = {
    // 	nome: "Auto da Compadecida", 
    // 	ano: 2000, 
    // 	elenco: [
    // 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    // 		"Virginia Cavendish"
    // 		], 
    // 	transmissoesHoje: [
    // 		{canal: "Telecine", horario: "21h"}, 
    // 		{canal: "Canal Brasil", horario: "19h"}, 
    // 		{canal: "Globo", horario: "14h"}
    // 		]
    // }

    // console.log(filme.elenco[0])
    // console.log(filme.elenco[filme.elenco.length - 1])
    // console.log(filme.transmissoesHoje[2])
    //```
    

//     a) O que vai ser impresso no console?


//RESPOSTA: Matheus Nachtergaele
//          Virginia Cavendish 
//          canal: globo horario: 14h 

// 2. Leia o código abaixo

//  ```jsx   
//     // const cachorro = {
//     // 	nome: "Juca", 
//     // 	idade: 3, 
//     // 	raca: "SRD"
//     // }

//     // const gato = {...cachorro, nome: "Juba"}

//     // const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//     // console.log(cachorro)
//     // console.log(gato)
//     // console.log(tartaruga)
// //```    

//     a) O que vai ser impresso no console?
// RESPOSTA 
//         nome:juca          idade :3           raça:srd
//         nome:juba          idade :3           raça:srd
//         nome:jubo          idade :3           raça:srd
//     b) O que faz a sintaxe dos três pontos antes do nome de um objeto?


// RESPOSTA: compia o que tem no array ou no objeto

// 3. Leia o código abaixo

    // ```jsx
    // function minhaFuncao(objeto, propriedade) {
    // 	return objeto[propriedade]
    // }

    // const pessoa = {
    //   nome: "Caio", 
    //   idade: 23, 
    //   backender: false
    // }

    // console.log(minhaFuncao(pessoa, "backender"))
    // console.log(minhaFuncao(pessoa, "altura"))
    // ```

//     a) O que vai ser impresso no console?

//RESPOSTA: FALSE

//     b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// RESPOSTA: no console.log pediu para imprimir o item que esta na posicao do backender que é false já o item altura não foi determindado.

//-------------------xxx-----------------xxx-----------------------

// Exercicios de codigo


// 1. Resolva os passos a seguir: 

//     a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 

//     ```jsx
//     // Exemplo de entrada
//     const pessoa = {
//        nome: "Amanda", 
//        apelidos: ["Amandinha", "Mandinha", "Mandi"]
//     }

//     // Exemplo de saída
//     "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
//     ```

//     - 💡  Dica

//         Não se esqueça de chamar a função passando o objeto que você criou como argumento, senão seu código não será executado!

const nomeEApelido = {
    nome: "Luis",
    apelidos: ["nino","cabeça","boy"]
}    
console.log ("Eu sou",nomeEApelido.nome,"mas pode me chamar de",nomeEApelido.apelidos[0],"ou",nomeEApelido.apelidos[1],"e tambem de",nomeEApelido.apelidos[2],".")

//     b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

//     - 💡  Dica

//         Não lembra da sintaxe de espalhamento ou spread? Não tem problema!

//         Pode pesquisar a vontade! Nesse [link](https://blog.fellyph.com.br/javascript/spread-operator/) tem vários exemplos - e não se esqueçam que o Google é melhor amigo da pessoa desenvolvedora 💘

//RESPOSTA 
const novosApelidos = {...nomeEApelido,apelidos:["lu","menino","boyzao"]}
console.log ("Eu sou",nomeEApelido.nome,"mas pode me chamar de",novosApelidos.apelidos[0],"ou",novosApelidos.apelidos[1],"e tambem de",novosApelidos.apelidos[2],".")

// 2. Resolva os passos a seguir: 

//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
const cadastro = { 
    nome:"Luis",
    Idade: 39,
    profissão:"Estudante"
} 

//     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`
//     - Exemplo

//         ```jsx
//         const pessoa = {
//         	nome: "Bruno", 
//           idade: 23, 
//         	profissao: "Instrutor"
//         }

//         minhaFuncao(pessoa)

//         // Retorno: ["Bruno", 5, 23, "Instrutor", 9]
//         ```
cadastro.caracteresDoNome = cadastro.nome.length
cadastro.caracteresDaProfissão = cadastro.profissão.length
console.log([cadastro])

// 3. Resolva os passos a seguir: 

//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
let carrinho = []
const frutasSacolao1 = {
    nome: "morango",
    disponibilidade: true 

}
const frutasSacolao2 = {
    nome: "abacate",
    disponibilidade: true 

}
const frutasSacolao3 = {
    nome: "kiwi",
    disponibilidade: true 

}
function compras(frutasSacolao1,frutasSacolao2,frutasSacolao3){
    carrinho.push(frutasSacolao1,frutasSacolao2,frutasSacolao3)
}
compras(frutasSacolao1,frutasSacolao2,frutasSacolao3)
console.log(carrinho)

//     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

//     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 

//     - 💡  Dica

//         Aqui você deve usar o método **push()**

//     d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 

//     - 💡  Dica

//         Deve aparecer algo assim no console do seu navegador:

//         !


//         Se voce clicar nessa setinha, o array é expandido e deve parecer com isso:

//         ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99cd6642-12d3-46c6-96dc-43a6569d001d/arr.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99cd6642-12d3-46c6-96dc-43a6569d001d/arr.png)



