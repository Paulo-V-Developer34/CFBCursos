//o **promise** serve para quando há algo que vai acontecer porém vai demorar algum tempo, porém o código pode continuar enquanto isso não acontece, contudo o **await** serve para quando ele não pode continuar


const carregando = new Promise((resolve, reject)=>{
    const status = true
    tempo = 3000

    setTimeout(()=>{ //serve para esperar um tempo
        if(status){
            resolve("Carregou :D")//posso retornar qualquer coisa
        } else {
            reject("Não carregou ;-;")
        }
    }, tempo)
})

let texto75 = "Carregando..."
console.log(texto75) //esse comando foi executado mesmo que o promise ainda não tenha acabado

carregando.then((texto)=>{
    texto75 = texto
    console.log(texto75)
})
carregando.catch((texto)=>{
    texto75 = texto
    console.log(texto75)
})
