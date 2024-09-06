const container1 = document.getElementById("container1")
const container2 = document.getElementById("container2")
const btncopiar = document.getElementById("btncopiar")
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


