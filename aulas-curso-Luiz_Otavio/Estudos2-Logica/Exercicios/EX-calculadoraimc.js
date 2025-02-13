
const formulario = document.querySelector('#calculadoraIMC')

const pesoA = document.querySelector('.pesoP')
const alturaA = document.querySelector('.alturaP')

formulario.addEventListener('submit',function(evento){
    evento.preventDefault();

    const peso = Number(pesoA.value)
    const altura = Number(alturaA.value)

    if(!peso){//se o peso for diferente do que deve ser, vai retornar peso invalido
        setresultado('Peso invalido', false)
        return;
    };

    if(!altura){//se a altura for diferente do que deve ser, vai retornar altura invalida
        setresultado('Altura invalida', false)
        return;
    }

    const imc = getIMC(peso, altura);
    const msg = `Seu IMC é ${imc}`

    setresultado(msg, true)//naturalmente eu deixo meu parametro de 'validar' como true, assim, ele fica falso APENAS quando os ifs dali de cima acontecerem

    } );

//função para calcular o imc    
function getIMC(peso,altura){
    const imc = peso/altura **2;
    console.log(imc.toFixed(2))
    return imc.toFixed(2);    
}
    

function criarP(){
    const paragrafo = document.createElement('p')
    //paragrafo.classList.add(classn)//aqui eu coloco uma classe em todos os paragrafos que forem criados
    return paragrafo;//eu criei uma função que gera um paragrafo e adiciona a uma constante, que nesse caso é a constante 'paragrafo'
};


function setresultado(msg, validar){
    const resultado = document.querySelector('.pesoIdeal');
    resultado.innerHTML = ``;//zerei a linha, deixei sem nada
    
    const paragrafo = criarP();
    paragrafo.innerHTML = msg
    resultado.appendChild(paragrafo);//aqui eu adiciono a constante do paragrafo que é igual a msg, dentro da constante de resultado, que é vazia

    if(validar){
        paragrafo.classList.add('pesoIdeal-bom')
    } 
    else{
        paragrafo.classList.add('pesoIdeal-ruim')
    }
    
};

//console.log(resultado) //eu n posso puxar uma constante de dentro de uma função, logo eu posso usar a mesma constante com valores diferentes dentro de cada função diferente

