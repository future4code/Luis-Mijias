

//Exercícios de interpretação de código

// 1. Leia o código abaixo

//     ```jsx
//     function minhaFuncao(variavel) {
//     	return variavel * 5
//     }

//     console.log(minhaFuncao(2))
//     console.log(minhaFuncao(10))
//     ```

//     a) O que vai ser impresso no console?

// RESPOSTA: Será impressona tela : 10 e 50

//     b) O que aconteceria se retirasse os dois 
//     `console.log` e simplesmente invocasse a função
//      `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria
//       no console?

// RESPOSTA: O Cálculo da funcão foi realizado porém nao será mostrado no console.

// 2. Leia o código abaixo

//     ```jsx
//     let textoDoUsuario = prompt("Insira um texto");

//     const outraFuncao = function(texto) {
//     	return texto.toLowerCase().includes("cenoura")
//     }

//     const resposta = outraFuncao(textoDoUsuario)
//     console.log(resposta)
//     ```

//     a. Explique o que essa função faz e qual
//      é sua utilidade
// RESPOSTA: Pelo que eu entendi essa função verifica se o texto
//     que usuário inseriu inclui a palavara cenoura estando em letra maiuscula ou náo.
//     b. Determine qual será a saída no console
//      para cada uma das 3 entradas do usuário:
//          i.   `Eu gosto de cenoura`
//          ii.  `CENOURA é bom pra vista`
//          iii. `Cenouras crescem na terra`
// 
// RESPOSTA: Todas serão True 


//          ------------------xxx-------------------xxx-----------------


//          - **Exercícios de escrita de código**



//     1. Escreva as funções explicadas abaixo:

//         a) A função não deve receber nenhum parâmetro
//e deve imprimir uma mensagem falando algumas informações sobre você, como: 

//         ```
//         "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//         ```
//         Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

// RESPOSTA:
    const inforSobreMim = function() {
    console.log(`Eu sou luis, tenho 39 anos, moro em Santo Andre e sou Estudante.`)
    }
  imprime = inforSobreMim()

//         b)  Agora escreva uma função que receba 4 parâmetros que correspondem
// às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

//         ```
//         Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
//         ```

//         - Exemplo

//             Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:

//             `"Eu sou Laís, tenho 23 anos, moro em São Paulo e sou instrutora."`
// RESPOSTA:  

   const infSobreMim = function(nome, idade, cidade, profissao) {
   console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
 }

 infSobreMim("Luis Carlos", 39,"Santo André","Estudante da Labenu")
 infSobreMim("Lais", 23, "São Paulo", "instrutora")


//     2. Escreva as funções explicadas abaixo:

//         a) Escreva uma função que receba 2 números como parâmetros, e,
//  dentro da função, faça a soma das duas entradas e retorne o resultado. 
//  Invoque a função e imprima no console o resultado.

// RESPOSTA:
function somaDuasEntradas (num1, num2){
    const soma = num1 + num2
    return soma
   }
const resultado = somaDuasEntradas(2, 3)
console.log("Soma das entradas =", resultado)

//         b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
// RESPOSTA:
function retornaBooleano (num1, num2){
    const compara = num1 >= num2
    return compara
   }
const resultado1 = retornaBooleano(2,3)
const resultado2 = retornaBooleano(3,2)
const resultado3 = retornaBooleano(3,3)
console.log("O primeiro Número é maior ou igual ao segundo número?", resultado1)
console.log("O pr3meiro Número é maior ou igual ao segundo número?", resultado2)
console.log("O primeiro Número é maior ou igual ao segundo número?", resultado3)

//         c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
function parInpar (number){
    const verifica = (number % 2) === 0
    return verifica
}
const resultado4 = parInpar(4)
const resultado5 = parInpar(777)
console.log ("O numero é par?",resultado4)
console.log ("O numero é par?",resultado5)


//         d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
    // let mensagem = prompt("Insira um texto");

    //RESPOSTA: PRECISO IR AO MÉDICO DEPOIS EU TERMINO
    //     const Funcao = function(texto) {
    //  	return texto.toUpperCase().length()
    //  }

    //  const resposta6 = Funcao(mensagem)
    //  console.log(resposta6)

  
// //     3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

// //         ```
//         Números inseridos: 30 e 3
//         Soma: 33
//         Diferença: 27
//         Multiplicação: 90
//         Divisão: 10
//         ```