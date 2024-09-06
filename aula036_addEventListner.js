const container1 = document.getElementById("container1")
const container2 = document.getElementById("container2")
const btncopiar = document.getElementById("btncopiar")
const btnremover = document.getElementById("btnremover")
const cursos = [...document.querySelectorAll(".curso")]

//adicionando os eventos
cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        el.classList.toggle("destaque")
    })
})

btncopiar.addEventListener('click', ()=>{
    let elselecionados = [...document.querySelectorAll('.destaque')]
    elselecionados.map((el)=>{
        el.setAttribute('class', 'curso')
        container2.appendChild(el)
    })
})

//não está funcionando como eu queria, eu gostaria que todos os que fossem selecionados no container 2 fossem parar no container 1

btnremover.addEventListener('click', ()=>{
    let elnaoselecionados = [...document.querySelectorAll('.curso:not(.destaque)')] //o not serve para negar e o ":" indica que ele só vai fazer essa verificação nos elementos que estiverem dentro de elementos com a classe "curso"
    elnaoselecionados.map((el)=>{
        el.setAttribute('class', 'curso')
        container1.appendChild(el)
    })
})


