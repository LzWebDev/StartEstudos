//INICIO VARIAVEL DE CONTROLE      //CONDIÇÃO      //
// for ( let i = 50;  i >= 20;  i-= 1) {
//     console.log(i)
// }
//FOR = DURANTE ou pode ser abreviação para forever que é 'para sempre'

for (let p = 0; p <= 10; p ++){
    const par = p % 2 === 0;
    
    if(par == true){
        console.log(`${p} é par`)
    }
    else if(par != true){
        console.log(`${p} é impar`)
    }
}


const lista = ['Maça', 'Banana', 'Pera', 'Abacaxi', 'Uva', 'Abacate']
for(let i = 0; i < lista.length; i++){
    console.log(`Indice ${i}`, lista[i])
}