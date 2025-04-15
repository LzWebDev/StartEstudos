function cadastro(){

    const form = document.querySelector('.formulario');
    const resposta = document.querySelector('.resultado');

    const listaDeLogin = []

    function receberCadastro(evento){
        evento.preventDefault();
        
        const nome = form.querySelector('.nome')
        let cpf = form.querySelector('.cpf')
        const email= form.querySelector('.email')
        const senha = form.querySelector('.senha')

        listaDeLogin.push({
            nome: nome.value,
            cpf: cpf.value,
            email: email.value,
            senha: senha.value,
        })

        resposta.innerHTML += `<p> ${nome.value} ${cpf.value} ${email.value} ${senha.value}  </p>`

        

    }

    form.addEventListener('submit', receberCadastro);

};
cadastro();