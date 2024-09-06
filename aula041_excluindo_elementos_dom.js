//Podemos usar removeChild para isso

let cursos = ['Python','PHP','Java','Typescript','C++']
//adicionando elementos ao DOM

//div
const div = document.createElement('div')
const iddiv = "container1"
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
    let btn_lixeira = document.createElement('img')
    btn_lixeira.setAttribute('src','https://image.freepik.com/icones-gratis/lixeira_318-120301.jpg')
    btn_lixeira.setAttribute('alt','imagem de uma lixeira')
    btn_lixeira.addEventListener('click',(evt)=>{
        console.log(evt.target)                     
        eldiv.removeChild(evt.target.parentNode)    //aqui excluimos o elemento
    })
    curso.appendChild(btn_lixeira)

    eldiv.appendChild(curso)
})