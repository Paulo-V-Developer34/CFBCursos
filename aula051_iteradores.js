//listas
const l1 = [10,20,32,13]
const l2 = "Youtube"

//para criar o nosso prórprio iterador nós podemos criar o seguinte código

const iterador1 = l1[Symbol.iterator]()

console.log(iterador1.next().value)
console.log(iterador1.next().value)
console.log(iterador1.next().value)
console.log(iterador1.next().value)
console.log(iterador1.next().value)

//iterador 2

const it2 = l2[Symbol.iterator]()

console.log(it2.next().value)
console.log(it2.next().value)
console.log(it2.next().value)
console.log(it2.next().value)
console.log(it2.next().value)