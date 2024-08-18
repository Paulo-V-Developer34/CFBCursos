// as funções geradoras são declaradas com function*
// elas fazem um "passo a passo de tarefas" que podem ser interrompidas

function* login(){
    const gmail=yield"Qual é o seu gmail?"
    const senha=yield"Qaul é a sua senha?"
    return `o gmail "${gmail}" e/ou a senha "${senha}" estão incorretos, tente novamente`
}
const tpc = login()
console.log(tpc.next().value)
console.log(tpc.next('kkk@gmail.com').value)
console.log(tpc.next('kkkkk').value)
console.log(tpc.next().value) //daqui para frente os comandos não serão executados
console.log(tpc.next('kkk@gmail.com').value)
console.log(tpc.next('kkkkk').value)