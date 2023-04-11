async function buscaEndereco(cep) {
    var mensagemErro = getElementById('erro');
    mensagemErro.innerHTML ="";
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error('CEP não existente!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;

        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    } catch (erro) {
        mensagemErro.innerHTML `<p>CEP Invalido.Tente Novamente</p>`;
        console.log(erro)
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout",()=> buscaEndereco(cep.value));

//Tipo de função asincrona com .then.catch e .finally
// .then(resposta => resposta.json())
// .then(r => {
//     if (r.erro) {
//         throw Error('Esse cep não existe')
//     } else
//         console.log(r)
// })
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('Processamento concluido'));


// let ceps=['01001000','01001001'];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));