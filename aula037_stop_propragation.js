//stopPropagation serve para evitar que um elemento filho receba algo que será dado ao elemento pai, como por exemplo um addEventListner

const cursos = [...document.querySelectorAll(".curso")]
const container1 = document.getElementById("container1")

container1.addEventListener('click', (evt)=>{
    console.log(evt)
    console.log(evt.target+"este elemento foi criado")
})

cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        evt.stopPropagation()    //jeito certo
        // el.stopPropagation()  //jeito errado
    })
})