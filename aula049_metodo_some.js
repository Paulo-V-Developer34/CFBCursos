//o some retorna true se pelo menos um valor for verdadeiro

//retorna true apenas se todos os elementos forem verdadeiros

const verdadeiro = [2,4,6,8,19] //1 verdadeiro
const falsos = [12,11,13,5,2] //tudo falso

let resposta1 = ""
let resposta2 = ""

const verifica1 = verdadeiro.some((el,i,arr)=>{
    if(el<18){
        resposta1 = "O elemento que está fora de conformidade é o "+i //aqui ele me retornou o último elemento fora de conformidade antes do que estava em conformidade
    }
    return el>=18
})

const verifica2 = falsos.some((el,i,arr)=>{
    if(el<18){
        resposta2 = "O elemento que está fora de conformidade é o "+i //ele só vai retornar o primeiro elemento falso para ser mais rápido
    }
    return el>=18
})

console.log(verifica1+resposta1)
console.log(verifica2+resposta2)