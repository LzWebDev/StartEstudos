/*
    Operadores logicos
    && - AND - E
    || - OR - OU
    !- NOT- NÃO
*/


let carteira = 20
let temperatura = 38
const dinheiro = carteira > 0;
const calor = temperatura > 36;

console.log(true && true)
console.log( true && false)

const usuario = 'Luiz'
const senha = '12345678'

const logar = usuario === 'Luiz' && senha === '12345678'
console.log(`Você pode logar? ${logar}`)

console.log(!false)//NEGA O VALOR E INVERTE
console.log(!!false)//NEGA O VALOR 2 VEZES E INVERTE