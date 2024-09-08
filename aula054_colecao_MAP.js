//a coleção MAP é semelhante a um objeto

let lista = new Map() //estou fazendo uma instância do MAP

lista.set("nome","Paulo")
lista.set("idade",17) //set adiciona elementos

console.log(lista)

lista.delete("nome")

console.log(lista)
console.log(lista.has('idade'))
console.log(lista.size)

