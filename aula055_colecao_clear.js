//diferentemente de arrays a coleção set não permite dados duplicados

let musicas = new Set(["Deus dos Deuses", "Além do Rio Azul", "Lugar Santo"]) //eu consigo colocar valores dentro da coleção ainda durante sua chamada

musicas.add("Vai Valer a Pena")
musicas.add("Além do Rio Azul")// não vai conseguir adicionar
musicas.delete('Deus dos Deuses')

console.log(musicas)

// colocandos os itens em uma div
// for (let m of musicas){
//     minhadiv.innerHTML += m+"<br>" //dessa forma eu utilizo o conseito de += com elementos HTML
// }

musicas.clear()
console.log(musicas)

