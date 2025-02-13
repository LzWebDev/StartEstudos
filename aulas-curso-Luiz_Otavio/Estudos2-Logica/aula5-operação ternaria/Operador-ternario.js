//(condição) => ? => (valor verdadeiro)  :  (valor falso)

const pontuacaousuario = 999;

if(pontuacaousuario > 1000){
    console.log('Usuario vip')
}
else{
    console.log('Normal')
}

const nivelusuario = pontuacaousuario >= 1000 ? 'Usuario Vip' : 'Usuario normal'