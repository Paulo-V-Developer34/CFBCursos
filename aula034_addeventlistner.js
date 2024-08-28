//ele adiciona um evento a um elemento

const botao = document.getElementById("aula34")

const cursos = [...document.querySelectorAll(".curso")]

// const msg =()=>alert("Você apertou um botão :D")

// botao.addEventListener("click", msg) // não precisa colocar () dentro desta função pois ela vem de uma variável

botao.addEventListener("click", (evt)=>alert(`O elemento ${evt.target} foi clicado`))

cursos.map((el)=>el.)

