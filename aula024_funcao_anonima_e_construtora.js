//uma função é anonima quando uma variável tem a função de uma função, nesse caso não precisamos passas o nome da função, mas sim da variável

let soma = function(...valores){
    let soma = 0
    for(let valor of valores) {
        soma += valor
    }
    return soma
}

console.log(`O valor da compra é de R$ ${soma(21,7)}`)

//uma função CONSTRUTORA é uma função super resumida

let soma2 = new Function ("n1", "n2", "return n1 + n2")

console.log(`O valor da compra é de R$ ${soma2(25,7)}`)