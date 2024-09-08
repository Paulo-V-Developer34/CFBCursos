//botoes

const btnadd = document.getElementById('btnadd')
const btnexc = document.getElementById('btnexc')
const btnaddanter = document.getElementById('btnaddanter')
const btnaddposter = document.getElementById('btnaddposter')
const txtnomecurso = document.getElementById('nomecurso')

let cursos = ['Python','PHP','Java','Typescript','C++']
//adicionando elementos ao DOM

//div
const div = document.createElement('div')
const iddiv = "container2"
div.setAttribute('id',iddiv)
div.setAttribute('class','container')
document.body.appendChild(div)

console.log("div criada")

let nitemlista = 0

//função para criar cursos
const criarcursos = (curso)=>{
    nitemlista++
    let cursodiv = document.createElement('div')
    cursodiv.innerHTML = curso
    cursodiv.setAttribute('id',"c"+nitemlista)
    cursodiv.setAttribute('class',"curso")
    let eldiv = document.getElementById(iddiv)

    //criando o radio
    let radio = document.createElement('input')
    radio.setAttribute('type','radio')
    radio.setAttribute('name','rb_cursos')
    cursodiv.appendChild(radio)

    eldiv.appendChild(cursodiv)
    return cursodiv
}

cursos.map((el)=>{
    criarcursos(el)
})


//função para selecionar elemento
function selecionado(){
    console.log("deu certo1")
    let todoscursos = [...document.querySelectorAll('input[type=radio]')] //seleciona todo o elemento input com o valor do atributo "type" igual a "radio"
    const radioselecionado = todoscursos.filter((el,n)=>{
        return el.checked
    })
    return radioselecionado[0] //lembre-se o fileter sempre retorna um array, isso significa que o elemento [0] teve que ser explicitamente citado
}

//botão para selecionar elemento
btnadd.addEventListener('click',(evt)=>{
    const es = selecionado()
    const elselect = es.previousSibling.textContent //lembre-se o fileter sempre retorna um array, isso significa que o elemento [0] teve que ser explicitamente citado
    alert(`O elemento selecionado foi o ${elselect}`)
})

//botão para excluir elemento
btnexc.addEventListener('click', (evt)=>{
    const es = selecionado()
    const elselect = es.parentNode
    elselect.remove() //remove a si mesmo
})

//botão adicionar antes
btnaddanter.addEventListener('click', (evt)=>{
    const es = selecionado()
    const elselect = es.parentNode
    const ccriado = criarcursos(txtnomecurso.value)
    document.getElementById(iddiv).insertBefore(ccriado, elselect)
})

//botão adicionar depois
btnaddposter.addEventListener('click', (evt)=>{
    const es = selecionado()
    const elselect = es.parentNode
    const ccriado = criarcursos(txtnomecurso.value)
    document.getElementById(iddiv).insertBefore(ccriado, elselect.nextSibling)
})