//as funções de seta ou arrow functions são funções mais simplificadas
//elas fazem parte das funções anônimas

let meuNome = "Paulo"

let saudacao = (nome)=>{return `Bem vindo(a) ${nome}`}
console.log(saudacao(meuNome))

//outra vantagem desse tipo de função é que você não precisa colocar () se a função só tiver 1 argumento e nem {} se tiver apenas 1 expressão

let promocao = nome=>`${nome}! Você foi promovido`//observe que se você colocar chaves {} você obrigatoriamente precisa ter o return
console.log(promocao(meuNome))