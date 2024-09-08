//os objetos em JS fazem parte da programação orientada a objetos

class pessoa {
    constructor(nome){
        this.nome=nome
    }
}

const p1 = new pessoa('Paulo') //o parênteses não é necessário caso a classe não possua atributos
const p2 = new pessoa('João') //o parênteses não é necessário caso a classe não possua atributos
const p3 = new pessoa('Pedro') //o parênteses não é necessário caso a classe não possua atributos

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)

