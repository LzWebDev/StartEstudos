const nome = 'Luiz';
let idade;
let altura;
let peso;
//posso definir uma variavel e declarar seu valor depois caso eu queira
//não posso fazer isso com constantes
idade = 19;
peso = 88;
altura = 1.83;

let imc;
imc = peso / (altura * altura)

let anoDeNascimento = 2005
//CONCATENAÇÃO ANTIGA   
console.log('Meu nome é '+ nome, 'tenho ' + idade + ' anos, possuo '+ altura + 'm de altura e o meu imc é de ' +imc)
console.log(nome + 'nasceu no ano de '+anoDeNascimento)

//CONCATENAÇÃO DA NOVA FORMA
console.log( `Meu nome é  ${nome} tenho ${idade} anos, possuo ${altura}m de altura e o meu imc é de ${imc}`)
console.log(`${nome} nasceu no ano de ${anoDeNascimento}`)//utilizando o acento agudo invertido, para poder usar o ${} como forma de concatenação 
