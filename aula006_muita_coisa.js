//comparação
let num1 = 1
let num2 = "1"

console.log(num1 == num2)
console.log(num1 === num2) // ele é uma comparação mais precisa

console.log("A conta é verdadeira? " + num1 == num2) // vai dar false pois ele junta o texto com o número
console.log("A conta é verdadeira? " + (num1 == num2)) // aqui dá certo pois ele faz tudo separado

//inserção de dados

//let nome = prompt("Digite seu nome") //Só funciona no browser


//Indentificação do sistema do usuário
if (navigator.userAgent.match(/Android/i)) {
    console.log("Você está usando um celular")
}


//O que é DOM