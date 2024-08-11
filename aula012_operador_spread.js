//ele serve para pegar um item de cada vez e transforma-los em um array

let divs = document.getElementsByTagName('div') //não transforma o que está dentro da tag <div> em um array, trazendo desvantagens
let divs2 = [...document.getElementsByTagName('div')] //esse sim

divs2.push = "paulo"
//divs.push esse comando não é válido pois isso não é considerado um array

//o foreach só funciona no divs2, não no divs

//testando o valor de cada um

console.log(typeof(divs))
console.log(typeof(divs2))
