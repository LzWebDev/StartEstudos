const nomes = ['Luiz','Bianca' ,'Livia' ,'Victor' ,'Denner' ,'Davi' ];
console.log(nomes[1])//assim eu posso acessar o nome 1(tecnicamente é o 2) da lista do array
nomes[7] = 'Marcia'

let numero = ((Math.random() * (10 - 3)).toFixed(0))
console.log(nomes[(numero)])//sistema de aleatorizar os nomes

nomes.push('Debora')
nomes.push('Eunice')//adicionar ao final da lista um novo nome

console.log(nomes.length)//mostra quantos elementos tenho na lista
console.log(nomes)

nomes.unshift('Monica')//adiciona no começo da lista o nome nome
console.log(nomes[11])//o elemento 11 do array é undefined 
