// EXERCÍCIO 01
function inverteArray(array) {
 let newArray = []
 for (let indice =array.length -1;indice>= 0; indice -= 1){
   newArray.push(array[indice])
 }
 return newArray
}


// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  arrayParElev = []
  for (let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      arrayParElev.push(Math.pow(array[i],2))
    }}
    return arrayParElev
  

      
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {

  let arrayDePares =[]

  for (let i = 0; i < array.length; i++){
  if(array[i] % 2 === 0){
    arrayDePares.push(array[i])
  }
}
  return arrayDePares

}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let i = 0
  let big = -Infinity
  while(i < array.length){
    if(array[i]>maior){
      big = array [i]
    }
    i++
  }
return big
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}