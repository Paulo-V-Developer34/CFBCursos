//Podemos usar removeChild para isso

let cursos = ['Python','PHP','Java','Typescript','C++']
//adicionando elementos ao DOM

//div
const div = document.createElement('div')
const iddiv = "container2"
div.setAttribute('id',iddiv)
div.setAttribute('class','container')
document.body.appendChild(div)

//cursos

cursos.map((el, i)=>{
    let curso = document.createElement('div')
    curso.innerHTML = el
    curso.setAttribute('id',"c"+i)
    curso.setAttribute('class',"curso")
    let eldiv = document.getElementById(iddiv)

    //criando a lixeira
    let radio = document.createElement('input')
    radio.setAttribute('type','radio')
    radio.setAttribute('name','rb_cursos')
    curso.appendChild(radio)

    eldiv.appendChild(curso)
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
document.getElementById('btnadd').addEventListener('click',(evt)=>{
    const es = selecionado()
    const elselect = es.previousSibling.textContent //lembre-se o fileter sempre retorna um array, isso significa que o elemento [0] teve que ser explicitamente citado
    alert(`O elemento selecionado foi o ${elselect}`)
})

//botão para excluir elemento
document.getElementById('btnexc').addEventListener('click', (evt)=>{
    const es = selecionado()
    const elselect = es.parentNode
    elselect.remove() //remove a si mesmo
})