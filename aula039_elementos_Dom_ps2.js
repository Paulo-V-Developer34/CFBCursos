// podemos verificar se um elemento possui filhos ou não usando

function aula39() {
const c12 = document.getElementById("cursos-dispo")
const gotext = document.querySelector("div > p")

c12.hasChildNodes() == true ? console.log("O elemento possui filhos") : console.log("O elemento NÃO possui filhos")

console.log(c12.hasChildNodes())
console.log(gotext.parentElement.parentElement) //avô 

}