const vdd = true
const real = true

let nome = 'Luiz' //Let tem escopo de bloco, como uma piramide, ele vai buscar o valor do parametro de acordo com a ordem, ele vai primeiro buscar no escopo de 'ifs' ate chegar no escopo global
//Não posso usar um "let" e querer puxar ele dentro de um bloco, sem antes ter declarado o valor dele por exemplo
let acesso = 'Acesso autorizado'
if(real){
    console.log(acesso)
//let acesso = 'acesso autorizado'//se eu definir uma variavel dps de ter chamado ela, vai dar erro
}

var nome2 = 'Luiz' //declarando //Var pode ser redeclarada de acordo com a ordem dele 
var nome2 = 'Lindo'//aqui a var 'nome2' ja foi redeclarada

if(vdd){
    let nome = 'Eduardo' //Redeclarando
    var nome2 = 'Gato'
    console.log(nome)

    if(vdd){
        let nome = 'Melo' //Redeclarando
        var nome2= 'Dudu'
        console.log(nome)
    }
};
console.log(nome, nome2)//quando eu executo um comadno fora dos blocos ifs, a variavel declarada por Let, vai ser a do escopo global, ja a variavel declarada por var, vai ser a ULTIMA definida 

function falaroi(){
    var nomeusuario = 'Luiz'
    //return nomeusuario
}

console.log(nomeusuario)//não é possivel puxar uma variavel de dentro de uma função
