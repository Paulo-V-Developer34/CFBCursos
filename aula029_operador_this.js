//o operador THIS indica que uma variável (this.variavel) pertence ao bloco de comando de onde ele está sendo executado e não de outra variável
//de outro lugar, como uma variável VAR ou parâmetros de funções por exemplo.
var nome = "João"
var gmail = "Joao@gmail"

function cliente(nome, gmail) {
    this.nome = nome
    this.gmail = gmail

    //Ao mesmo tempo que eu estou declarando uma função anônima eu estou dizendo que ela só é válida nesse escopo
    this.mensagem1 = (nome, gmail)=>
        `Olá ${nome}! seu gmail ${gmail} foi cadastrado com sucesso`
    
    //Nesse caso eu não preciso inserir as variáveis pois ele já consegue pega-las do escopo raiz (function cliente)
    this.mensagem2 = ()=>{
        return `Olá ${this.nome}! seu gmail ${this.gmail} foi cadastrado com sucesso`
    }

    //eu não posso colocar o "this" em uma função "normal"
    function mensagem3 () {
        return `Olá ${this.nome}! seu gmail ${this.gmail} foi cadastrado com sucesso`
    }

    let mensagens = [this.mensagem1(nome, gmail), this.mensagem2(), mensagem3()]

    return mensagens
}

for(mensagem of cliente("Ronaldo","Ro@gmail")) {
    console.log(mensagem)
}

//código imcompleto (não em função, mas em relação à aula)