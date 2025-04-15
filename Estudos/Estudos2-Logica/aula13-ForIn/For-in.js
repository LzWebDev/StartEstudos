// const frutas = ['Banana ', 'Maça', 'Uva']

// for (let index in frutas){
//     console.log(frutas[index])
// }

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Eduardo',
    idade: 19,
    profissão: 'Assistente ADM'
}

for (let i in pessoa){
    console.log(i)
}

for (let i in pessoa){
    console.log(i/**CHAVE DO OBJETO */, pessoa[i]/**VALOR DA CHAVE RESPECTIVAMENTE */)
}