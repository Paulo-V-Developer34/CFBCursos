//retorna true apenas se todos os elementos forem verdadeiros

const verdadeiros = [19,46,34,24,23]
const falsos = [12,46,34,5,23]

let resposta1 = ""
let resposta2 = ""

const verifica1 = verdadeiros.every((el,i,arr)=>{
    if(el<18){
        resposta1 = "O elemento que está fora de conformidade é o "+i
    }
    return el>=18
})

const verifica2 = falsos.every((el,i,arr)=>{
    if(el<18){
        resposta2 = "O elemento que está fora de conformidade é o "+i //ele só vai retornar o primeiro elemento falso para ser mais rápido
    }
    return el>=18
})

console.log(verifica1+resposta1)
console.log(verifica2+resposta2)