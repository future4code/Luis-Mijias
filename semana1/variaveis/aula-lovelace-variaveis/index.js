
// EXEMPLOS

// console.log('Hello World!')

// // COMENTÁRIOS

// //Comentar apenas uma linha
/*Comentar mais de uma
linha*/

// //Atalho para comentar: command + /   ou  ctrl + r ou ctrl + / ou ctrl + ;

// //IMPRIMIR NO CONSOLE

// console.log("Olá turma Lovelace! Prontos para o Js?")

// //PROMPT

// const nome = prompt("Qual é o seu nome?")
// console.log(nome)

// //VARIÁVEIS

// //CONST

// //Uncaught TypeError: invalid assignment to const 'idade' 
// // Já atribui um valor à minha variável const e não posso mudar - const: o valor é uma constante, não muda. 
//  const idade = 33
// idade = 34 -> NÃO PODE

// //LET
// let nomeESobrenome = 'Amanda Rangel'
// console.log('Original: ', nomeESobrenome)

// //Uncaught SyntaxError: redeclaration of let nomeESobrenome - não devemos escrever novamente o let (redeclarar variável) no momento de atribuir novo valor

// let nomeESobrenome = 'Victor Nogueira'

// //atribuindo novo valor:

// nomeESobrenome = 'Victor Nogueira'

// console.log('Mudança: ', nomeESobrenome)

// //NÃO PODE!!! DECLARAR SEM LET OU CONST
// // nomdeDaTurma = 'Lovelace'

// // console.log('Nome da turma: ', nomdeDaTurma)

// //TIPOS DE DADOS NO JS - STRING, NUMBER, BOOLEAN

// const nomeDaTurma = 'Lovelace'
// const numeroDaTurma = 14
// const ehTurmaImpar = false

// console.log('A nova turma da Labenu chama', nomeDaTurma, 'e é a turma de número', numeroDaTurma, 'e é turma impar? :', ehTurmaImpar)

// //TYPEOF

// const primeiroNome = 'Tuana'
// const sobrenome = 'Sampaio'
// const idade = 20
// const souEstudante = true

// console.log('Tipo primeiro nome:', typeof primeiroNome)
// console.log('Tipo idade:', typeof idade)
// console.log('Tipo sou estudante:', typeof souEstudante)

// //UNDEFINED
// //inicializar = atribui valor
// let minhaVarivael 
// console.log('Tipo do valor armazenado: ', typeof minhaVarivael)
// minhaVarivael = 'Olá'
// console.log('Tipo do valor armazenado: ', typeof minhaVarivael)

// let variavelUndefined = undefined
// variavelUndefined = 25
// console.log('Tipo do valor armazenado: ', typeof variavelUndefined)

// // NULL
// let variavelNull = null
// console.log(variavelNull)

//Uncaught SyntaxError: missing = in const declaration - não podemos declarar variável const sem atribuir valor

// const minhaSegundaVariavel
// console.log('Tipo do valor da segunda variável: ', typeof minhaSegundaVariavel)

// CONVERSÃO ENTRE TIPOS

// const idadeNumero = 33
// const idadeString = idadeNumero.toString()

// console.log('Numero:', typeof idadeNumero)
// console.log('String:', typeof idadeString)

// const idadeString = '33'
// const idadeNumero = Number(idadeString)

// console.log('Numero:', typeof idadeNumero)
// console.log('String:', typeof idadeString)


//----------------------------EXERCÍCIO 1-----------------------------

//1
// const primeiroNome = 'Tuana'
// const sobrenome = 'Sampaio'
// const idade = 20
// const souEstudante = true

// console.log('Nome Completo: ', primeiroNome, sobrenome)
// console.log('Idade: ', idade)
// console.log('É estudante: ', souEstudante)


//----------------------------EXERCÍCIO 2-----------------------------

const nome = prompt('Qual é o seu nome?')
const idade = prompt('Qual é a sua idade?')
const idadeNumero = Number(idade)

const nome2 = prompt('Qual é o seu nome?')
const idade2 = prompt('Qual é a sua idade?')
const idadeNumero2 = Number(idade2)
const somaIdades = idadeNumero + idadeNumero2

console.log('Tipo armazenada na variável nome: ', typeof nome)
console.log('Tipo armazenada na variável idade: ', typeof idade)
console.log('Soma:', somaIdades )

//Transformando em number direto

const idade = Number(prompt('Qual é a sua idade?'))