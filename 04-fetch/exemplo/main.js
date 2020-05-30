const cepInput = document.getElementById("cep");
const logradouroInput = document.getElementById("logradouro");
const complementoInput = document.getElementById("complemento");
const bairroInput = document.getElementById("bairro");
const localidadeInput = document.getElementById("localidade");
const ufInput = document.getElementById("uf");


cepInput.addEventListener("blur", () => { // blur é o oposto de focus, vai ativar quando a pessoa tira o mouse do campo
    fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`)
        .then((response) => { return response.json() })
        .then((dados) => {
            logradouroInput.value = dados.logradouro
            complementoInput.value = dados.complemento
            bairroInput.value = dados.bairro
            localidadeInput.value = dados.localidade
            ufInput.value = dados.uf
        })

});