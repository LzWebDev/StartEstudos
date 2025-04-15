/*
const data = new Date(0);      //data 0 é o valor de partida do comando, que parte de 01/01/1970
console.log(data.toString())   //as datas são formadas em milisegundos
*/
const data = new Date(); //data 0 é o valor de partida do comando, que parte de 01/01/1970
console.log(data.toString())//as datas são formadas em milisegundos

const data1 = new Date('2005-01-20 06:50:30'); //como fazer uma data em forma de string e dar certo
console.log(data1.toString())//as datas são formadas em milisegundos

/*const day = new Date('2005-01-20 06:50:30')
console.log('Dia', day.getDate())
console.log('Mês', day.getMonth() + 1) //Mês começa do 0
console.log('Ano', day.getFullYear())
console.log('Hora', day.getHours())
console.log('Minuto', day.getMinutes())
console.log('Segundo', day.getSeconds())
console.log('Dia da semana', day.getDay()) //Dia começa do domingo, ent dia 4 da semana, é uma quarta
*/
function addzeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function FormatandoData(data){
    const dia = addzeroAEsquerda(data.getDate())
    const mes = addzeroAEsquerda(data.getMonth() + 1) //Mês começa do 0
    const ano = addzeroAEsquerda(data.getFullYear())
    const hora = addzeroAEsquerda(data.getHours())
    const min = addzeroAEsquerda(data.getMinutes())
    const seg = addzeroAEsquerda( data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data2 = new Date();
const DataNow = FormatandoData(data2);
console.log(DataNow)

