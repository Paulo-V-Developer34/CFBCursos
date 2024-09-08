const lista = ['css', 'JavaScript', 'HTML', 'PHP']

const valorConsulta = "CSS" //aqui representa qualquer tipo de consulta que normalmente é feita por um input.value

//não retornará o valor procurado
const pesquisa1 = lista.find((el, i, arra)=>{ //diferentemente do filer o find retorna apenas o primeiro elemento com o valor encontrado
    if(el==valorConsulta) {
        return "O elemento pesquisado foi o "+el
    }
})

//retornará o valor procurado
const pesquisa2 = lista.find((el, i, arra)=>{
    if(el.toUpperCase==valorConsulta.toUpperCase) {
        return "O elemento pesquisado foi o "+el //ele não retorna nada além do elemento pesquisado ;-;
    }
})

console.log(pesquisa1) 
console.log(pesquisa2) 