function soma(x =1, y=1){
    const resultado = x + y;
    return resultado; 
}                            //FUNCTION NORMAL

const resultado = soma(10,23)
console.log(resultado)

const raiz = function(nraiz){
    return nraiz ** 0.5;
}                              //FUNCTION INVISIVEL
console.log(raiz(9))

const raiz1 = nraiz => nraiz ** 0.5;
console.log(raiz1(25))               //ARROW FUNCTION