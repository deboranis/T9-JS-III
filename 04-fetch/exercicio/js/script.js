const cardSection = document.getElementById('cards-section')
const errorSection = document.getElementById('error')
const loading = document.getElementById('spinner')
const chamarNovaCarta = document.getElementById('chamarNovaCarta')
    // Caso os cards não carreguem, mostraremos isso:
const placeholderCard = {
    nome: "Carta não carregada",
    tipo: "Arcano Maior",
    descricao: "Sem descrição",
    imagem: "http://via.placeholder.com/250X500",
    link: "https://www.astrolink.com.br/"
}

renderizaCarta = carta => {
    const novaCarta = new Card(carta).render()
    cardSection.innerHTML = novaCarta
}

//
renderizaCarta(placeholderCard); // só pra aparecer o template vazio da carta

chamarNovaCarta.addEventListener('click', () => {
    fetch(`https://raw.githubusercontent.com/reprograma/T9-JS-III/master/04-fetch/exercicio/tarot.json`) // url pra qual será feita a requisição
        .then((response) => { return response.json() }) // transforma o json em objeto javascript
        .then((dados) => { // vamos processar os dados
            const numAleatorio = Math.floor(Math.random() * dados.length); // aqui estamos sorteando um numero: floor serve pra arredondar pra baixo o numero do random, que por sua vez é feito com base no comprimento do "dados"

            renderizaCarta(dados[numAleatorio]); // estamos passando pra funcao renderizaCarta um item da array dados
        })
})