//a diferença entre um objeto normal e um objeto literal é que o literal não cria instâncias independentes, todas se referenciam a um mesmo elemento
let nome = ""
let idade = 0

const pessoa={
    nome,
    idade,
    info:function(){
        console.log(this.nome)
        console.log(this.nome)
    },
    setinfo:function(nome,idade){
        this.nome = nome
        this.idade = idade
    }
}

const p1 = pessoa //eu não posso criar uma instância de um objeto literal
const p2 = pessoa

p1.nome = "Paulo"
p1.idade = 17

console.log(p1)
console.log(p2)

// pessoa.setinfo("Paulo",13)
// pessoa.info()