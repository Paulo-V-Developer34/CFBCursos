// dentro dos elementos do DOM podemos considerar que cada elemento possui uma relação com outro elemento, como relação de
// child
// parent 
// siblings
// "avô" --> quando você usa um .parentElement.parentElement
function aula38() {
const c11 = document.getElementById("c1") //PHP
// const listaCursos = [...document.getElementById("cursos-dispo")]   Não podemos usar spread nessa situação 
const listaCursos = document.getElementById("cursos-dispo")

console.log(c11.parentElement)
console.log(c11.childNodes)
console.log(listaCursos.childNodes)}