/*const eu = {
    nome: 'Luiz',
    sobrenome: 'Eduardo',
    idade: 19,
    estadoCivil: 'Casado'
};

console.log(eu)
console.log(eu.idade)*/

function criarpessoa (nome, sobrenome, idade, estadoCivil){//parametros
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        estadoCivil: estadoCivil,
        nascimento: 2024 - idade 
    };//FUNÇÃO FACTORY/FABRICA DE OBJETOS
};

const pessoa1 = criarpessoa('Luiz', 'Eduardo', 19, 'Casado' )//valor passado para o parametro
console.log(pessoa1)

const eu = {
    nome: 'Luiz',
    sobrenome:'Eduardo',
    idade: 19,

    falar() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    },

    incrementacao(){
        ++this.idade;
        console.log(`Minha idade +1 é ${this.idade}`)
    }
}

eu.falar();//puxando a função dentro da constante/objeto
eu.incrementacao();