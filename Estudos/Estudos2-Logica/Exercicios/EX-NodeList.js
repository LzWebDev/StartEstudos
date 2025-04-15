const paragrafos = document.querySelector('.paragrafos')
const pgr1 = document.querySelectorAll('p')
// console.log(paragrafos)
//ir no console do navegador e digitar a const pgr1

const estilos = getComputedStyle(document.body)
const backestilos = estilos.backgroundColor;
console.log(backestilos)

for (let p of pgr1){
    p.style.backgroundColor = backestilos
    p.style.color = '#000000'
}

const meubotao = document.getElementById('botao')
const paragraf = document.getElementById('parag')

meubotao.addEventListener("click", () => {
    // meubotao.classList.add("mudarDeCor");
    paragraf.classList.add("mudarDeCor")
})