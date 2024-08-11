let colocacao = 6

switch (colocacao) {
    case 1:
        console.log("Primeiro lugar")
        break
    case 2:
        console.log("Segundo lugar")
        break
    case 3:
        console.log("Terceiro lugar")
    case 4: case 5: case 6:
        console.log("Menção honrosa")
        break
    default:
        console.log("Sem medalha")
}
