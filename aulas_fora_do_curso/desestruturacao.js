//podemos pegar apenas dados específicos sobre outros dados (objetos, arrays, variáveis)

//arrays

const animais = ['gato', 'cachorro', 'coelho', 'sapo']

// const { animalfavorito } = animais //com {} vai dar errado, devemos utilizar []
const [ animalfavorito ] = animais //vai pegar o primeiro elemento do array

const [ animal1, animal2 ] = animais //vai pegar os 2 primeiros elementos do array e assim em diante

console.log(`${animalfavorito}, an1 = ${animal1} an2 = ${animal2}`)

//objetos
const pessoa = {
    nome: "Paulo",
    telefone1: 23234,
    endereco: {
        numero: 123,
        bairro: "bairro PV",
        rua: "rua do P"
    },
    filhos: [
        'Sales',
        'Rai',
        'Jhonata'
    ]
}

const {nome} = pessoa //extrai apenas 1 atributo //também posso extrair funções :D

const {telefone1: tel1} = pessoa //extrai um valor e renomeia ele

const {endereco: {numero: num}} = pessoa

console.log(`Meu nome é ${nome}, meu telefone é ${tel1}. \nO número da minha casa é ${num}`)


