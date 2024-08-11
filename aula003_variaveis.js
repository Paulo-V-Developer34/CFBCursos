// vamos ver a diferença entre let, var e const

// a variável só pode ser declarada 1 vez, nas próximas vezes em que ela for usada ela deve ser usada sem let, const ou var

//"var" pode ser acessada de qualquer lugar
//|--> Porém só quando ela é definida, Ex: se ela for declarada em um if mas o if não ser executado ela não existirá


"use strict"

if(true){
    var nome = "Paulo"
}

console.log(nome)

//"let" só pode ser acessado dentro de um escopo

let idade = 10

if(true){
    let idade = 25
}

console.log(idade) //perceba que ele não vai conseguir acessar o 25

//"const" é um valor constante

const rg = 123

//const rg = 321 ele já até dá erro aqui

console.log(rg)

//o JS converte os tipos dos dados automaticamente
let cidade = "guarujá"
cidade = 123

console.log(cidade)
