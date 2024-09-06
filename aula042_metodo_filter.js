//o método filter é semelhante ao map e serve para filtrar elementos de um array

const idades = [7,12,13,22,5,55]

let maiorIdade = idades.filter((el,i,array)=>{
    if(el >= 18) {
        return el
    }
})

console.log(maiorIdade)