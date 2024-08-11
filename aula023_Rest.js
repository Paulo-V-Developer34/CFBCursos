//parâmetros REST são parâmetros que são passados com uma quantidade indeterminada

function soma(...valores) {
    //let quantidade = valores.length não precisei usar pois eu utilizei o for of
    let soma = 0
    for(let valor of valores) {
        soma += valor
    }
    return soma
}

console.log(soma(3,5,10,2))