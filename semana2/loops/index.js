//console.log( 'Ola mundo!!')



// - **Exercícios de interpretação de código**

//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

//     1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

// ```jsx
// // let valor = 0
// // for(let i = 0; i < 5; i++) {
// //   valor += i
// // }
// // console.log(valor)
// ```jsx

//RESPOSTA: O resultado será 10, pelo que eu entendi isso acontece porque o valor de (i) irá chegar até 4 e o valor de (valor) irá chegar até 6 imprimindo valor que é 6 + 4 = 10.

//     2. Leia o código abaixo:

// ```jsx
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero >= 18) {
// 		console.log(numero)

// 	}
// }
// ```

//         a) O que vai ser impresso no console?
//RESPOSTA: Irá mostrar todos os números maiores que 18.
//  19
//  21
//  23
//  25
//  27
//  30



//         b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

//RESPOSTA: Eu nao consegui pensar em nenhuma maneira no momento.

//     3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

// ```jsx
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// ```
//RESPOSTA: Eu entendi que o número digitado irá definir a quantidade de linhas e a quantidade de linhas irá definir a quantidade de asteriscos.

//*
//**
//***
//****



//             Se tiver dificuldade para entender esse exercício, rode as duas primeiras iterações do loop no [pytutor](http://pythontutor.com/javascript.html#mode=edit)



// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

//RESPOSTA

const todosOsPets = () => {
    let numeroDeBichos = Number(prompt("Quantos pets você tem?"))
    let resposta = numeroDeBichos
    let quantidade = []
    let i = 1
    let pergunta
    if (resposta === 0) {
        console.log("Que pena! Você pode adotar um pet!")
    } else {
        while (i <= resposta) {
            pergunta = prompt("Digite o nome um por um?")
            quantidade.push(pergunta)
            i++
        }
        return console.log(quantidade)      
    }
}

todosOsPets()

//     - 💡 Dica

//         Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

//     c) Por fim, imprima o array com os nomes dos bichinhos no console

// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

//     a) Escreva um programa que **imprime** cada um dos valores do array original.

//     b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

//     c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

//     d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

//     e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

//     - 💡 Dica

//         Você deve criar variáveis para guardar o `valorMaximo` e o `valorMinimo`. Inicialize a variável `valorMaximo` com um valor que não seja maior que qualquer valor do array original e a `valorMinimo` com um valor que não seja menor que qualquer valor do array original.

//     - Exemplo de saídas esperadas

//         ```jsx
//         // Este array será usado para exemplificar as respostas de todos os itens
//         const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//         // Resposta item a.
//         80
//         30
//         130
//         40
//         60
//         21
//         70
//         120
//         90
//         103
//         110
//         55

//         // Resposta item b.
//         8
//         3 
//         13
//         4
//         6
//         2.1
//         7 
//         12
//         9
//         10.3
//         11 
//         5.5

//         // Resposta item c.
//         [80, 30, 130, 40, 60, 70, 120, 90, 110] 

//         // Resposta item d.
//         [ 'O elemento do índex 0 é 80',
//           'O elemento do índex 1 é 30',
//           'O elemento do índex 2 é 130',
//           'O elemento do índex 3 é 40',
//           'O elemento do índex 4 é 60',
//           'O elemento do índex 5 é 21',
//           'O elemento do índex 6 é 70',
//           'O elemento do índex 7 é 120',
//           'O elemento do índex 8 é 90',
//           'O elemento do índex 9 é 103',
//           'O elemento do índex 10 é 110',
//           'O elemento do índex 11 é 55' ]

//         // Resposta e.
//         "O maior número é 130 e o menor é 21"
//         ```