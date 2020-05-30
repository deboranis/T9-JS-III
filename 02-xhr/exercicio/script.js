// Criar uma mini aplicação que recebe o nome de um pokemon, acessa sua API e retorna seu nome e imagem
// A API a ser usada é https://pokeapi.co/api/v2/pokemon/${nome_do_pokemon}/
// Ver documentação em https://pokeapi.co/
// A imagem deve ser ter essa URL https://pokeres.bastionbot.org/images/pokemon/${id_do_pokemon}.png
// Essa id é retirada da API anterior

<<<<<<< HEAD
// const form = document.getElementById('pkmForm');
// const input = document.getElementById('pkmInput');
// const pkmPlaceholder = document.getElementById('pkmPlaceholder');

// const chamarRequisicao = (e) => {
//     e.preventDefault();
//     pkmPlaceholder.innerHTML = "";
//     const pkmNome = input.value.toLowerCase();
//     const request = new XMLHttpRequest();

//     request.open("GET", `https://pokeapi.co/api/v2/pokemon/${pkmNome}/`, true);

//     request.addEventListener("readystatechange", function() {
//         if (request.readyState == 4 && request.status == 200) {
//             const data = JSON.parse(request.response);
//             const p = document.createElement('p');
//             const img = document.createElement('img');

//             p.textContent = data.species.name;
//             img.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`)

//             pkmPlaceholder.appendChild(p).appendChild(img);
//         }
//     })

//     request.send();
// }

//
//TRANSFORMAR EM FETCH
=======

// TRANSFORMAR A REQUISIÇÃO XMLHTTREQUEST EM FETCH
// 14h30
>>>>>>> 997cb2a56e68ad810efb551bd54b16b4978e7148

const form = document.getElementById('pkmForm');
const input = document.getElementById('pkmInput');
const pkmPlaceholder = document.getElementById('pkmPlaceholder'); // chamando todos os elementos por id

const chamarRequisicao = (e) => { // aqui estamos chamando uma requisicao
    e.preventDefault(); // previnindo o comportamento default do botao submit, pq trata-se de um form
    const pkmNome = input.value.toLowerCase(); // deixando o nome do pokemon em lowercase caso seja digitado em maiuscula

    fetch(`https://pokeapi.co/api/v2/pokemon/${pkmNome}`) // chamando a API e colocando a const pkmNome
        .then((response) => { return response.json() })
        .then(dado => {
            const p = document.createElement('p'); // criando o elemento p pra guardar o nome do pokemon
            const img = document.createElement('img'); // criando o elemento img pra aparecer a img correspondente 
            p.innerHTML = dado.name; // dizendo que o innerhtml do paragrafo é o name (definido no index pkmName)
            img.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${dado.id}.png`)
            pkmPlaceholder.appendChild(p).appendChild(img); // dizendo que na div pkmPlaceholder vamos criar um p e uma img
            console.log('dado', dado)
        })

<<<<<<< HEAD
=======
const chamarRequisicao = (e) => {
  e.preventDefault();
  pkmPlaceholder.innerHTML = "";
  const pkmNome = input.value.toLowerCase();
  const request = new XMLHttpRequest();
  
  request.open("GET", `https://pokeapi.co/api/v2/pokemon/${pkmNome}/`, true);

  request.addEventListener("readystatechange", function () {
    console.log('request', request)
    if (request.readyState == 4 && request.status == 200) {
      const data = JSON.parse(request.response);
      const p = document.createElement('p');
      const img = document.createElement('img');

      p.textContent = data.species.name;
      img.setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`)

      pkmPlaceholder.appendChild(p).appendChild(img);
    }
  })
  
  request.send();
>>>>>>> 997cb2a56e68ad810efb551bd54b16b4978e7148
}

form.addEventListener('submit', (e) => chamarRequisicao(e));

//DE OUTRA FORMA, MAIS SUCINTA:


const form = document.getElementById('pkmForm');
const input = document.getElementById('pkmInput');
const pkmPlaceholder = document.getElementById('pkmPlaceholder');

const chamarRequisicao = (e) => {
    e.preventDefault();
    pkmPlaceholder.innerHTML = "";
    const pkmNome = input.value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pkmNome}`)
        .then((response) => { return response.json() })
        .then((dadoObj) => {
            inserirPkmPagina(dadoObj)
        });
};