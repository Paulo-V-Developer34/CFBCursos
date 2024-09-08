//os objetos em JS fazem parte da programação orientada a objetos

class pessoa {
    constructor(nome,tipouser){
        this.nome=nome
        if(tipouser==1){
            this.tipouser = "ADM"
        } else {
            this.tipouser = "User"
        }
    }

    informacoes() {  //em um método JS eu não preciso escrever "function"
        console.log(this.tipouser)
        console.log(this.nome)
    }
}

const p1 = new pessoa('Paulo',1) //o parênteses não é necessário caso a classe não possua atributos
const p2 = new pessoa('João',2) //o parênteses não é necessário caso a classe não possua atributos
const p3 = new pessoa('Pedro',3) //o parênteses não é necessário caso a classe não possua atributos

p1.informacoes()    
p2.informacoes()    
p3.informacoes()    

