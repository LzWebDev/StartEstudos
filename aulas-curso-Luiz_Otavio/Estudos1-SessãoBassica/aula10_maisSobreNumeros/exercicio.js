document.body.innerHTML += '<h1> Dissecando o numero </h1>';

let numero = parseFloat(prompt('Digite um numero'));
let raiz = (numero ** 0.5).toFixed(2);
let nan = isNaN(numero);
let arrebaixo = Math.floor(numero);
let arrecima = Math.ceil(numero);
let decimais = numero.toFixed(2);

document.body.innerHTML += `seu numero escolhido foi ${numero} </br>`
document.body.innerHTML += `A raiz quadrada é: ${raiz} </br>`
document.body.innerHTML += `É NaN: ${nan} </br>`
document.body.innerHTML += `Arredondando para baixo ${arrebaixo} </br>`
document.body.innerHTML += `Arredondando para cima ${arrecima} </br>`
document.body.innerHTML += `Com duas casas decimais ${decimais}`

function reiniciar(reiniciar){
    Window.location.reload()
}