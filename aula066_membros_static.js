// para eu acessa um membro estático de um NPC eu não preciso instanciá-lo, apenas chamar sua classe e depois o método

class Npc {
    static alerta=false //essa é uma propriedade estática
    constructor(energia){
        this.energia=energia
    }
    info(){
        console.log(`O NPC está ${Npc.alerta? 'em alerta':'calmo'}`) //utilizo Npc.alerta para acessa-la
        console.log(`A energia do NPC é ${this.energia}`)
    }
    static alertar(){
        Npc.alerta = true
    }
}

console.log(Npc.alerta)

const n1 = new Npc(100)
const n2 = new Npc(140)

console.log(n1) //aqui não retorna propriedades static

Npc.alertar() //metodos static são compartilhado com todas as instâncias

console.log(n1.info())
console.log(n2.info())