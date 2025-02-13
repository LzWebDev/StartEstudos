const pessoaEU = {
    //nome: 'Luiz',
    sobrenome: 'Eduardo',
    idade: 19,
    endereço: {
        // rua: 'Mario lira',
        // numero: 57,
    }
};

console.log(pessoaEU.sobrenome)


        // //atribuição via desestruturação
        // const {nome = 'Não existe', sobrenome} = pessoaEU // CASO EU NÃO TENHA NENHUM VALOR ATIBUIDO AO MEU 'NOME'
        // console.log(nome, sobrenome)//dessa forma eu consigo atibuir outro valor para a variavel do objeto

        // const { nome: teste = 'Mauricio'} = pessoaEU;
        // console.log(teste)//nesse caso eu so consigo atribuir o valor de Mauricio a minha variavel teste, quando a minha chave(nome:) não possui valor definido na constante

        // console.log(pessoaEU.nome)

const {endereço:  {rua, numero}, //AQUI EU EXTRAI A RUA E O ENDEREÇO SEPARADAMENTE
    endereço} //aqui eu extrai o endereço completo
    = pessoaEU
console.log(rua, numero/**valores indefinidos*/ ,endereço/**DENTRO DO CONSOLE ELE MOSTRA UMA CHAVES ASSIM '{}' pois não tem nenhuma constante dentro do objeto endereço, então ele mostra chaves vazias*/)

const {endereço:  {rua: R = 'ABACAXI', numeros = '51'}} = pessoaEU /*AQUI EU EXTRAI A RUA E O ENDEREÇO SEPARADAMENTE*/ 
/*endereço: casinhaend = 'abobrinha'} */ 
//aqui eu extrai o endereço completo
//OBS: EU NÃO POSSO MUDAR UMA CHAVE INTEIRA, JA TENDO MUDADO AS CHAVES DENTRO DA CHAVE EM SI
    
console.log(R, numeros)

//RESUMO, A DESESTRUTURAÇÃO, É UMA FORMA DE EXTRAIR PARTES ESPECIFICAS, E/OU ATRIBUIR NOVOS VALORES CASO EU QUEIRA OU PRECISE