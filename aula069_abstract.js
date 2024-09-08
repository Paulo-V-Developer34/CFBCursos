//O abstract indica que uma classe serve apenas como molde para outras classes (herança), e não pode ser instânciada diretamente
class TipoNave {
    constructor(tipo){  
        if(this.constructor===TipoNave){
            throw new TypeError("Essa classe não pode ser instânciada");  //deu certo
        }
        if(this.mostrararma===TipoNave.prototype.mostrararma){
            throw new TypeError("O metodo mostrararma deve ser incluido") //deu certo
        }
        if(tipo==1){
            this.tipo="militar"
            this.arma="canhão"
        } else {
            this.tipo="esportivo"
            this.arma="nenhuma"
        }
    }
    mostrararma(){
        console.log(this.arma)
    }    
}

class Navep extends TipoNave{ 
    constructor(vida,municao,tipo){
        super(tipo)        //aqui estava dando erro pois eu estava tentando estanciar uma classe abstract ;-;, agora eu usei o super e o extends e funcionou
        this.vida=vida
        this.municao=municao
    }

    mostrararma(){
        super.mostrararma()
    }

    info (){    
        console.log(this.vida)
        console.log(this.municao)
        console.log(this.arma)
        console.log(this.tipo)
        console.log("-----------------------------")
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
            console.log(this.arma)
            console.log(this.tipo)
            console.log("-----------------------------")
        } else {
            // super(info())  //isso aqui está errado
            super.info()    //esse está certo
        }
    }
}

const nav1 = new Navep(100,50,1)

nav1.info()

const nm1 = new Navemae(80,1000,0,2)
const nm2 = new Navemae(300,5000,1000,1)


nm1.info()
nm2.info()