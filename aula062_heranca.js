class carro {
    constructor(nome,tipo){
        this.nome = nome
        this.tipo = tipo
        this.ligado
    }

    ligar(){
        this.ligado = true
    }
}

const c1 = new carro("Fiat","Crônos")
c1.ligar()

console.log(c1)

//para usar a herança eu utilizo o extend na criação e o super() no constructor
//criando um carro militar
class militar extends carro {
    constructor(nome,tipo,municao){
        super(nome,tipo)
        this.municao = municao
    }

    atirar(){
        this.municao--
    }
}

const m1 = new militar("Tunder","ant-aéreo",12)
m1.atirar()
m1.atirar()
m1.atirar()

console.log(m1)