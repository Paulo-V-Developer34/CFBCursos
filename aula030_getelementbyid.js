//O método getElementById serve para que o java script consiga pegar o conteúdo de dentro de elementos com o ID identificador
//Porém ele retorna uma coleçãoHTML
//A coleçãoHTML pode ser convertida para um array usando o spread

//DÚVIDA-->em quais contextos podemos usar um HTML collection?

const card1 = document.getElementById("c2")

console.log(card1.innerHTML)

const container = document.getElementById("cursos-dispo")

console.log(container)

const container2 = [...document.getElementById("cursos-dispo")]

console.log(container2)
