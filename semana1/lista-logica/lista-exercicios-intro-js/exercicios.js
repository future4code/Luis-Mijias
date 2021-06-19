// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implante sua logica aqui
  const altura = Number(prompt("digite a altura"))
  const largura = Number(prompt("digite a largura"))
  const area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("digite o ano atual"))
  const anoDeNascimento = Number(prompt("digite o ano de nascimento"))
  const idade = anoAtual - anoDeNascimento
  console.log(idade) 
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
    const conta = peso /  (altura*altura )
    return conta
    
  }

const resultado = imprimeIMC(85, 1.8)
console.log("Seu IMC é :", resultado)




// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome=prompt("Qual o seu nome?")
  const idade=prompt("Qual a sua idade?")
  const email=prompt("Qual o seu e-mail?")

  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite sua primeria cor favorita:")
  const cor2 = prompt("Digite sua segunda cor favorita:")
  const cor3 = prompt("Digite sua terceira cor favorita:")
  const cores = [cor1,cor2,cor3]
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(s2ring) {
function retornsegundEmMaiuscula(st3ing) {
function retornterceirEmMaiuscula(string) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}