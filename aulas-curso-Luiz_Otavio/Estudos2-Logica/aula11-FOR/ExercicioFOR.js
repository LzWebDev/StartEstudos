const elementos= [
    {tag: 'p', texto: ' Texto 1 <br>'}, //0
    {tag: 'div', texto: ' Texto 2 <br>'}, //1
    {tag: 'footer', texto: ' Texto 3 <br>'  }, //2
    {tag: 'section', texto: ' Texto 4 <br>'  }, //3
]

// for (let i = 0; i < elementos.length/*MOSTRA QUANTIDADE DE ELEMENTOS DO ARRAY */; i++){
//     //console.log(`Indece ${i}, elementos`, elementos[i], elementos[i].tag)
    
//     let typeTAG = elementos[i].tag;
//     let text = elementos[i].texto;
//     // console.log(typeTAG)
//     // console.log(text)
//     // console.log(typeTAG + text)

//     setresposta(text)

//     function CriarTAG(typeTAG){
//         const eleTAG = document.createElement(typeTAG)
//         return eleTAG;
//     }

//     function setresposta(msg){
//         const aplicarTexto = document.querySelector('.textosTAG')
    
//         const tipoDeTag = CriarTAG();
//         tipoDeTag.innerHTML = msg
//         aplicarTexto.appendChild(tipoDeTag)
    
//         return aplicarTexto;
//     }
// }     ESSA FOI A MINHA RESPOSTA, DEU CERTO, MAS FICOU MUITO GRANDE


const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){ 
    let {tag, texto} = elementos[i]//crio separadamente elementos baseados na ordem de cada objeto
    let CriarTypTag = document.createElement(tag)//criando uma tag baseada no TIPO da tag de cada objeto

    CriarTypTag.innerHTML = texto //adiciono dentro do tipo, o texto respectivo

    div.appendChild(CriarTypTag)//adiciono o texto dentro da div criada

}

container.appendChild(div) //adiciono a div criada que ja possui o texto e o tipo de tag dentro do container
