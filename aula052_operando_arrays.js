//array
let array1 = ['azul','verde','vermelho',['claro','médio','escuro']]
let array2 = ['Java','JavaScript','Python',array1]

//operando arrays

array2.push('PHP') //adiciona um elemento no fim
array2.unshift('robotica') //adiciona um elemento no inicio
console.log(array2)

array2.pop() //remove o último elemento do meu array
array2.shift() //remove o primeiro elemento do meu array
console.log(array2)

//buscando elementos no meu array
console.log(array2[3][2])
console.log(array2[3][3][2])