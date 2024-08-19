//o método map serve para percorrer um array por completo

let cursos = ['php','js','java','python']
cursos.map((item, numero_item)=>{                           //!!!! há também um terceiro parâmetro no map
    console.log("seu curso é de "+ item)
})

// cursos.map(item, numero_item)=>{             este código está incorreto
//     console.log("seu curso é de "+ item)
// }

// console.log(cursos.map((item, numero_item)=>{    está errado também e eu não sei o por quê
//     let frase = "seu curso é de "+ item 
//     return frase)
//     }
// )

//podemos passar funções também para dentro de um map

function d(n){
    n = n*2 
    return n}
let vt = [1,2,3].map(d)
console.log(vt)



const numeros = ['1','2','4','7'] //erro ;_;
let num_convertidos = parseInt(numeros) //conversão para números

console.log(num_convertidos)

// function soma_num(...valores) {
//     let result = 1
//     for(valor of valores) {
//         result += valor
//     }
//     return result
// }
// let somando_um = num_convertidos.map(soma_num)
// console.log(somando_um)

