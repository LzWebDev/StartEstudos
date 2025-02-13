/*
PRIMITIVOS (imutaveis) - String, number, boolean, undefined, null (bigint, symbol)

REFERÊNCIA (MUTAVEL) - ARRAY, OBJECT, FUNCTION
*/

let nome = 'Luiz'
nome[0] = 'R'
console.log(nome[0])
//
let a = 'A'
let b = 'A'   //COPIA
console.log(a,b)
//


let c = [1, 2, 3];
let d = c;
c.push(5) //adiciona o valor desejado no FINAL do array
console.log(c, d)

c.pop() //retira o ultimo valor do array
console.log(c, d)


const pessoa = {
    nome: 'Luiz' ,
    sobrenome: 'Eduardo' ,
}
//cons al = pessoa //AQUI O VALOR DE AL E O VALOR DE PESSOA SERIAM O MESMO
const al = {...pessoa}//colocando os 3 pontinhos, eu puxo o mesmo valor da const PESSOA mas eu consigo alterar
al.nome = 'Livia' //aqui eu mudo apenas o parametro do nome e deixando o resto totalmente igual

console.log(al, pessoa)