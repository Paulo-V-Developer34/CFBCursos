//podemos criar objetos sem utilizar "class", podemos utilizar o "function"

function pessoa(nome,tipouser) {
    this.nome=nome
    if(tipouser==1){
        this.tipouser = "ADM"
    } else {
        this.tipouser = "User"
    }

    this.informacoes=()=>{            //temos que utilizar funções anônimas
        console.log(this.tipouser)    //temos que utilizar o this.
        console.log(this.nome)
    }
}

// const p1 = new pessoa('Paulo',1) //o parênteses não é necessário caso a classe não possua atributos
// const p2 = new pessoa('João',2) //o parênteses não é necessário caso a classe não possua atributos
// const p3 = new pessoa('Pedro',3) //o parênteses não é necessário caso a classe não possua atributos

// p1.informacoes()    
// p2.informacoes()    
// p3.informacoes()    

let pessoas = []

function addpessoas(nome, tipouser=2){
    let p = new pessoa(nome,tipouser)
    pessoas.push(p) 
}

//o método .focus é importante para redirecionar o "|" do usuário para onde queremos que ele digite novamente
// podemos usar input.value para forçar um input a ter um valor

addpessoas('Paulo', 1)
addpessoas('Pedro', 2)
addpessoas('Jonathas', 3)

pessoas[0].nome="João" //eu acessei a 1° instância e modifiquei seu nome
console.log(pessoas)