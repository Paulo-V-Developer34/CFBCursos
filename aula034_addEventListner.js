const cursos = [...document.querySelectorAll(".curso")]

cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        console.log(evt.target)
        console.log(evt.target.innerHTML)
        el.classList.add("destaque")
    })
})