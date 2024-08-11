//"&", "|" é um operador bitwise, ele se atenta aos bits e não ao valor "normal" das variáveis
//!!! é importante verificar as regras desse tipo de operação

let n1 = 10 // 00001010
let n2 = 11 // 00001011
console.log(n1 & n2)
console.log(n1 | n2)
console.log(n1 ^ n2)
console.log(n1 << 1) //eu movo os bits de casa de acordo com o número à direita
console.log(n1 >> 2)

