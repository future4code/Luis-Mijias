// EXERCÍCIO 01 -------------------------------------------------------------------
function imprimeOlaMundo(){
    console.log("Olá turma Lovelace!")
}

// imprimeOlaMundo()
// imprimeOlaMundo()
// imprimeOlaMundo()

// EXERCÍCIO 02 -------------------------------------------------------------------
function imprimeOlaPessoa(nome, idade){
    // console.log("Olá", nome)   // com a vírgula, APENAS no console, ele adiciona espaços
    // console.log("Olá " + nome) // concatenação de strings, precisamos adicionar os espaços
    console.log(`Olá ${nome}! Você tem ${idade} anos.`) // template string
}

// imprimeOlaPessoa("Yara", 23)
// imprimeOlaPessoa("Marina", 24)
// imprimeOlaPessoa("Guilherme", 25)
// imprimeOlaPessoa()

// const nomeProf = "Chijo"
// imprimeOlaPessoa(nomeProf, 27)

// const nomeInserido = prompt("Insira o seu nome")
// const idadeInserida = Number(prompt("Insida a sua idade"))
// imprimeOlaPessoa(nomeInserido, idadeInserida)

// EXERCÍCIO 03 -------------------------------------------------------------------
function somaDoisNumeros(num1, num2){
    const soma = num1 + num2
    return soma
    console.log("oi")
}

// const resultado = somaDoisNumeros(2, 3)
// console.log("resultado da soma", resultado)
// const novoResultado = resultado + 3
// console.log("resultado + 3", novoResultado)
// imprimeOlaPessoa("Chijo", resultado)
// console.log(soma)

// EXERCÍCIO 04 -------------------------------------------------------------------
function retornaExtremidadesDividasPor2(arrayDeNumeros){
    const primeiroElemento = arrayDeNumeros[0] / 2
    const ultimoElemento = arrayDeNumeros[arrayDeNumeros.length - 1] / 2
    const novoArray = [primeiroElemento, ultimoElemento]
    return novoArray
    //[2, 4, 6]
    // 0  1  2 => esses são os índices de cada elemento do array
}

const arrayDeNumeros1 = [2, 3, 6]

const resultado1 = retornaExtremidadesDividasPor2(arrayDeNumeros1)
const resultado2 = retornaExtremidadesDividasPor2([40, 60, 70, 3, 90])

console.log(resultado1)
console.log(resultado2)

// EXERCÍCIO 05 -------------------------------------------------------------------

// Exercício 2 com expressão de função
const imprimeOlaPessoaExp = function(nome, idade) {
    console.log(`Olá ${nome}! Você tem ${idade} anos.`)
}

imprimeOlaPessoaExp("Guilherme", 25)

// Exercício 3 com arrow function
const somaDoisNumerosArrow = (num1, num2) => {
    const soma = num1 + num2
    return soma
}

const valoresSomados = somaDoisNumerosArrow(2, 3)
console.log("Resposta da soma", valoresSomados)