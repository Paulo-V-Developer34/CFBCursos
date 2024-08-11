//funções aninhadas ocorrem quando temos 1 função dentro de outra

function somar(...valores) {
    return soma(valores) //retorna o retorno de outra função
}

function soma (valores) { //aqui eu não preciso "espalhar" (spread) os valores pois ele já receberá valores espalhados
    let resultado = 0
    for(valor of valores){
        resultado += valor
    }
    return resultado
}

console.log(somar(10,20,30))

//console.log(soma(10,20,30)) vai dar erro pois o "soma" só aceita valores espalhados (spread)

let kk = [10,20,30]

console.log(...kk)


