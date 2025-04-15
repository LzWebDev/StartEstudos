/*
&& -> false && ture -> false "o velor msm"
|| ->

é considerado falso:
false
0
'' "" `` -> textos vazios
null / undefined
NaN
*/

function falaroi(){
    return 'oi'
}

var executar = 'luiz'

console.log(executar && falaroi());//COMO DEU UM CURTO CIRCUITO, O VALOR FALSE QUE ESTIVER, SERA EXIBIDO, QUALQUER UM DOS VALORES QUE FOI MOSTRADO ACIMA NO 'É CONSIDERADO FALSO:'
var executar = undefined;
console.log(executar && falaroi())

console.log( 0 || false || 'Luiz' || undefined)//ele busca um valor 'True' e mostra ele

const CorUsuario = 'Vermelho';
const CorPadrao = CorUsuario || 'Preto'

console.log(CorPadrao)//eu posso usar isso como forma de definir algo que n foi definido, caso o usuario n escolha uma cor, "valor null" a CorPadrao sera o valor true de 'Preto', eu posso usar isso ao inves de uma estrutura de if

//DE FORMA RESUMIDA, A CONDIÇÃO DE || = OR,OU ELA ESCOLHE O PRIMEIRO VALOR QUE FOR POSITIVO 

