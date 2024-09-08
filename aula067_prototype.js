//o prototype serve para adicionar novas propriedades ou métodos dentro de um objeto(faz parte da POO) em JS

const Nave = function(vida,municao){
    this.vida=vida
    this.municao=municao

    this.info = ()=>{    //lembre-se de quando utilizar o function nunca criar funções nomais, mas sim anônimas
        console.log(this.vida)
        console.log(this.municao)
    }
}

const nave1 = new Nave(100,50)

// nave1.prototype.combustivel = 200   NUNCA FAÇA ISSO, o prototype faz parte de uma função construtora, isso significa que você deve utiliza-lo na própria classe, como feito a seguir
Nave.prototype.combustivel = 200

nave1.info()
Nave.prototype.viajar= function(){ //nesse caso eu não pude utilizar uma arrow function pois ela muda o comportamento do 'this'
    this.combustivel--
    console.log("Você viajou 10 Anos Luz")
}

nave1.viajar()
nave1.viajar()

console.log(nave1.combustivel)

