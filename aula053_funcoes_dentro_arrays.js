//podemos colocar funções dentro de arrays
//essa aula original possui alguns detalhes a mais a partir do exemplo prático da calculadora
const valores = [10,3,5]

const operacoes = [
    (val)=>{
        return val.reduce((anter,atual)=>{//estou operando com todos os elementos do array, por isso utilizei reduce
            return anter + atual
        })
    },
    (val)=>{
        return val.reduce((anter,atual)=>{//caso eu não colocasse 2 returns ele me retornaria undefined pois aqui eu tenho 2 arrow functions
            return anter * atual
        })
    },
    (val)=>{
        return val.reduce((anter,atual)=>{
            return anter / atual
        })
    }
]

//chamando as funções
console.log(operacoes[0](valores))
console.log(operacoes[1](valores))
console.log(operacoes[2](valores))