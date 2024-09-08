//ele itera todos os valores de um array e pode fazer operações com um return que ele fez

const valores = [1,2,3,4,8,13]

const reduce = valores.reduce((anter,atual, poster)=>{
    return anter + atual //exemplo da penultima operação return 10 + 8 onde '10' foi o valor do return anterior e '8' foi o valor atual do array
})

console.log(reduce) //31, soma de todos os valores 