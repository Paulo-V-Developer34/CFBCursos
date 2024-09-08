//O polimorfismo é o conceito de POO onde uma classe pode herdar métodos de outra classe ou ter métodos com mesmo nome porém de uma forma diferente

class Navep { 
    constructor(vida,municao,tipo){
        this.vida=vida
        this.municao=municao
        this.tipo=new TipoNave(tipo)//chomo criar uma instância dentro de outra instância
    }

    info (){    
        console.log(this.vida)
        console.log(this.municao)
        console.log(this.tipo.arma)
        console.log(this.tipo.tipo)
        console.log("-----------------------------")
    }
}

class TipoNave {
    constructor(tipo){  //O código não estava funcionando porque aqui estava como "function" e não como "constructor"
        if(tipo==1){
            this.tipo="militar"
            this.arma="canhão"
        } else {
            this.tipo="esportivo"
            this.arma="nenhuma"
        }
    }
    
}

class Navemae extends Navep {
    constructor(tamanho,vida,municao,tipo){
        super(vida,municao,tipo)            //O SUPER SEMPRE DEVE ESTAR NO INICIO DO ESCOPO PARA EVITAR ERROS
        this.tamanho = tamanho
    }
    info(){
        if(this.tamanho>200){
            console.log("Nota: Sua nave é grande demais para entrar em planetas")
            console.log(this.tamanho)
            console.log(this.vida)
            console.log(this.municao)
            console.log(this.tipo.arma)
            console.log(this.tipo.tipo)
            console.log("-----------------------------")
        } else {
            // super(info())  //isso aqui está errado
            super.info()      //esse está certo
        }
    }
}

const nav1 = new Navep(100,50,1)

nav1.info()

const nm1 = new Navemae(80,1000,0,2)
const nm2 = new Navemae(300,5000,1000,1)

nm1.info()
nm2.info()