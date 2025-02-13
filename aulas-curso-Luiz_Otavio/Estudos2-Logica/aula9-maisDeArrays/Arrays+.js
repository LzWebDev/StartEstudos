const numeros = [ [1, 2, 3 ], [4, 5 ,6 ], [7, 8 ,9 ]];
//assim eu vou acessar o indice 1, ou seja, o segundo, [4,5,6], e o 2 indice dentro do indice 1
//lembrando que os indices começam a contar do 0, ent o indice 2 é na vdd o 3
const [lista1, lista2, lista3] = numeros
console.log(lista3[1])

const [ ,[,, seis]] = numeros
console.log(seis)//duas formas de mostrar o mesmo valor, de arrays dentro de arrays

console.log(numeros[1][2])//essa forma é mais facil

