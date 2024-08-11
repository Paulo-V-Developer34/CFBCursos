function conexaoBD() {
    let conexaoBD = "error"
    return false
    console.log("Deu erro") //qualquer coisa depois da função return não será executada
}

if (conexaoBD()) {
    console.log("conexão deu certo")
} else {
    console.log("conexão não deu certo")
}