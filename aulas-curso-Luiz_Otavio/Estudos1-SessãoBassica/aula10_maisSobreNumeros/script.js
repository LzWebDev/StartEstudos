/*
let num1 = 10;
let num2 = 232.3242353456;

// console.log(num1.toString() + num2.toString())//transformar numero em string
// num1 = num1.toString();//mesma coisa de cima

console.log(num1.toString(2))//representação do numero em binario

console.log(num2.toFixed(3))//escolher a quantidade de numeros mostrados após a virgula

console.log(Number.isInteger(num2))//mostra se o numero que mostrei pela variavel é inteiro

let temp = num1 * 'ola';
console.log(Number.isNaN(temp))//mostra se o valor do numero é not a number

*/

let num3 = 9.9816;
console.log(Math.floor(num3))//ARREDONDA O NUMERO PARA BAIXO
console.log(Math.ceil(num3))//arredonda para cima
console.log(Math.round(num3))//arredonda o numero para o mais proximo

console.log(Math.max(1,2,3,4,5,6,7,8,9,10,11,12,12,14,5,325,34,324))//mostra o MAIOR numero da lista

const aleatorio = Math.round((Math.random() * (10)))//assim eu consilo selecionar atee qual numero eu vou deixar aleatorio
console.log(aleatorio)//gera um numero aleatorio entre 0 e 1

console.log(Math.pow(2, 6))//assim eu posso fazer uma potencia

console.log(9 ** 0.5)//tirando raiz quadrada, elevar a 0,5 ja que o JS n tem operador de raiz