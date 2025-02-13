const hora = 2;

if(hora>12 && hora<19){
    console.log('Boa tarde')
}
else if(hora >18 && hora <24){
    console.log('Boa noite')
}
else if(hora > 0 && hora < 6){
    console.log('Boa madrugada')
}
else{
    console.log('Bom dia')
}