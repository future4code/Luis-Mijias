// 1. Leia o código abaixo. Indique todas as
//  mensagens impressas no console, **SEM EXECUTAR o programa**.

//     ```jsx
//     const bool1 = true
//     const bool2 = false
//     const bool3 = !bool2

//     let resultado = bool1 && bool2
//     console.log("a. ", resultado)

//     resultado = bool1 && bool2 && bool3 
//     console.log("b. ", resultado) 

//     resultado = !resultado && (bool1 || bool2) 
//     console.log("c. ", resultado)

//     console.log("d. ", typeof resultado)
//     ```

// ******RESPOSTA******
// a. False
// b. False
// c. True
// d. Boolean

// 2. Seu colega se aproxima de você falando que o código dele 
// não funciona como devia.  Vamos ajudá-lo: consegue perceber 
// algum problema? O que será impresso no console? 
//     ```jsx
//     let primeiroNumero = prompt("Digite um numero!")
//     let segundoNumero = prompt("Digite outro numero!")
//     const soma = primeiroNumero + segundoNumero
//     console.log(soma)
//     ```
// ********RESPOSTA*********: Será impresso um tipo string pois nao foi declarado que é Number entao
// ficaria um valor ao lado do outro.
//..........let primeiroNumero = Number(prompt("Digite um numero!"))
// .........let segundoNumero = Number(prompt("Digite outro numero!"))
// .........const soma = primeiroNumero + segundoNumero
// .........console.log(soma)

// 3. Para o exercício anterior, sugira ao seu colega uma 
// solução para que o valor impresso no console seja, de fato,
//  a soma dos dois números.

//*******RESPOSTA********: Apenas declara como variavel Number como abaixo.
//..........let primeiroNumero = Number(prompt("Digite um numero!"))
// .........let segundoNumero = Number(prompt("Digite outro numero!"))
// .........const soma = primeiroNumero + segundoNumero
// .........console.log(soma)

// // 1. Faça um programa que:

// //     a) Pergunte a idade do usuário

// const idadeDoUsuario = Number(prompt("Qual a sua idade?"))
// console.log (idadeDoUsuario)

// //     b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

// const idadeDoAmigo = Number(prompt("Qual a idade da sua melhor amiga(o)?"))
// console.log (idadeDoAmigo)

// //     c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a 
// //do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

// const comparaIdade = idadeDoUsuario > idadeDoAmigo
// console.log("Sua idade é maior do qua a do seu melhor amigo?",comparaIdade)

// //     d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

// const diferencaDeIdade = idadeDoUsuario - idadeDoAmigo
// console.log("A difença entre sia idade e a do seu amigo é de",diferencaDeIdade,"anos.")

// //     - 💡  Dica

// //         Dica: não se esqueça de converter as respostas para o tipo **número**

// 2. Faça um programa que:

// //     a) Peça ao usuário que insira um número **par**

// const numeroPar = Number(prompt("Insira um número par"))

// //     b) Imprima na console **o resto da divisão** desse número por 2.

// const restoDadivisaoPorDois = numeroPar % 2
// console.log("Este é o resta da divisão por 2",restoDadivisaoPorDois)

//     c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

//RESPOSTA: Sim, o padrão se eu so digito números pares é que o resultado é zero .

//     d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código.

//RESPOSTA: Se o usuário inserir um número impar o resto da divisão sempre será 1.

//     - 💡  Dica

//         Dica: não se esqueça de converter as respostas para o tipo número

// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

// const idadeAnos = Number(prompt("Quantos anos você tem?"))

// //     a) A idade do usuário em meses
// const Meses = idadeAnos * 12
// console.log("Então você possui",Meses,"meses de vida.")
// //     b) A idade do usuário em dias
// const dias = idadeAnos * 365
// console.log("Então você possui",dias,"dias de vida.")
// //     c) A idade do usuário em horas
// const horas = idadeAnos * 8760
// console.log("Então você possui aproximadamente",horas,"horas de vida.")

// 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações 
//e imprima no console as seguintes mensagens:
const primeiroNumero = Number(prompt("digite o primeiro número."))
const segundoNumero = Number(prompt("Digite o segundo número."))

//     ```html
//     O primeiro numero é maior que segundo? true
const primeiroMaior = primeiroNumero > segundoNumero
console.log("O primeiro número é maior que o segundo número?",primeiroMaior)

//     O primeiro numero é igual ao segundo? false
const primeiroIgual = primeiroNumero === segundoNumero
console.log("O primeiro número é igual ao segundo número?",primeiroIgual)

//     O primeiro numero é divisível pelo segundo? true
const primeiroDivisivel = primeiroNumero >= segundoNumero
console.log("O primeiro número é divisível pelo segundo número?",primeiroDivisivel)

//     O segundo numero é divisível pelo primeiro? true
const segundoDivisivel = segundoNumero >= primeiroNumero
console.log("O segundo número é divisível pelo primeiro número?",segundoDivisivel)
//    ```
