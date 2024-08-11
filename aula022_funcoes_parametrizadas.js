function saudacao(nome) {
    console.log("Bom dia " + nome)
}

function soma(n1, n2) {
    let som = n1 + n2
    console.log(som)
}

function soma2(n1=0, n2=0) { //o valor depois do "recebe(=)" é o valor que será colocado dentro da variável caso ela não tenha sido enviada com nenhum valor
    let som = n1 + n2
    console.log(som)
}

saudacao("Paulo")

soma(3) //vai dar erro pois o n2 não foi declarado
soma2(3)
soma(3,2)