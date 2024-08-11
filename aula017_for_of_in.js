var listaNumerica = [10,20,30,40]
var tabela = []
var texto = document.querySelector("#texto")

function lista() {
  tabela = []
  for(l of listaNumerica) {
    tabela.push(l)
  }
  texto.innerHTML = tabela
}

function limparLista() {
  tabela = []
  texto.innerHTML = "Texto limpo" //O HTML está sendo considerado como código 0o0  <h1>Texto limpo</h1>
}

function acrescentarValores() {
  while (tabela.length < 10) {
  tabela.push("novo número")
  }
  texto.innerHTML = tabela
}
