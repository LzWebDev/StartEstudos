const nome = prompt('Digite seu nome:')
const letras = nome.length
const segundaletras = nome[1]
const letraz = nome.indexOf('z')
const letraA = nome.indexOf('a')
const ultimas3 = nome.slice(-3)
const lista = nome.split(' ')

document.body.innerHTML += `Olá ${nome}, muito prazer em ter você aqui. </br>`
document.body.innerHTML += `Seu nome tem ${letras} letras: </br>`
document.body.innerHTML += `A segunda letra do seu nome é: ${segundaletras} </br>`
document.body.innerHTML += `Qual o primeiro indice da letra z no seu nome? ${letraz} </br>`
document.body.innerHTML += `Qual a ultima letra do indice a no seu nome? ${letraA} </br>`
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${ultimas3}</br>`
document.body.innerHTML += `As palvras do seu nome são: ${lista} </br>`
