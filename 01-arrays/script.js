// map(): faz uma iteração com todos os elementos da lista e retorna outra
// map():
// input: Array
// output: Array de mesmo tamanho
// 1) Adicionar "a" no final das palavras
const profissionais = ["desenvolvedor", "programador", "autor", "vereador", "professor"];

const profissionaisMelhores = profissionais.map(
    (item) => {
        return item + "a";
    }
);

//que tambem poderia ser escrito como:

const profissionaisMelhores = profissionais.map(
    (item) => { // aqui item está no lugar de item do array, que é o primeiro parametro do map, e desempenha o papel de funcao de callback 
        const novaProfissional = item + "a"
        return novaProfissional;
    }
);


const profissionaisMelhores = profissionais.map(profissional => {
    return profissional + "a";
})

// 2) Retornar frutas com somente a primeira letra maiúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

// retorno:
// ["Maçã", "Banana", "Pera", "Melancia", "Pêssego", "Jaca"]
//passar por todos os itens
//1. colocar todas as letras minusculas
//2. colocar a primeira letra maiuscula
//3. colocar a lista nova em uma variável

const frutasFormatadas = frutas.map(
    (item) => {
        const letraInicial = item[0].toUpperCase();
        const itemMinusculo = item.toLowerCase();
        const itemSemPrimeiraLetra = itemMinusculo.substring(1);

        return letraInicial + itemSemPrimeiraLetra;
    }
);
// 3) Retonar uma nova array com o nome das alunas com a nota final
const notasAlunas = [{
        nome: "Julia",
        notas: [
            { materia: "matemática", nota: 7, peso: 1.5 },
            { materia: "portugues", nota: 3, peso: 2 }
        ]
    },
    {
        nome: "Zelia",
        notas: [
            { materia: "matemática", nota: 6, peso: 1.5 },
            { materia: "portugues", nota: 5, peso: 2 }
        ]
    },
    {
        nome: "Jussara",
        notas: [
            { materia: "matemática", nota: 8, peso: 1.5 },
            { materia: "portugues", nota: 2, peso: 2 }
        ]
    }
]

const notasFinaisAlunas = notasAlunas.map(
    (aluna) => {
        const arrNotas = aluna.notas;

        let somaNotas = 0;
        let somaPesos = 0;

        for (let i = 0; i < arrNotas.length; i++) {
            const nota = arrNotas[i].nota;
            const peso = arrNotas[i].peso;
            const notaFinalMateria = nota * peso;
            somaNotas += notaFinalMateria;
            somaPesos += peso;
        }

        const notaFinalUm = somaNotas / somaPesos;

        const novaAluna = {
            nome: aluna.nome,
            notaFinal: notaFinalUm
        }

        return novaAluna;
    }
)

// filter(): retorna uma nova array com apenas com elementos que atendem à condição

// 1) Criar nova array somente com números pares

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numPares = num.filter(
    (item) => { // item aqui so tem a funcao de marcar que estamos falando do item, nao do indice nem do array!
        const ehNumPar = item % 2 === 0; // retorna true, senao retorna false
        return ehNumPar;
    }
)


// 2) Criar nova array somente com profissionais da área de TI
const pessoas = [
    { nome: "Mell", area: "TI", profissao: "dev" },
    { nome: "Munique", area: "ciência", profissao: "pesquisadora" },
    { nome: "Melissa", area: "construção", profissao: "engenheira" },
    { nome: "Madalena", area: "TI", profissao: "infra" },
    { nome: "Monica", area: "medicina", profissao: "cardiologista" },
];

const profTI = pessoas.filter(
    (item) => {
        const ehTI = item.area === "TI";
        return ehTI;
    }
)


// reduce(): recebe uma array e retorna um valor só. Redutor.


const soma = num.reduce(
    (acumulado, item) => {
        const somaAtual = acumulado + item;
        return somaAtual;
    }
)

// 1) Dado uma array de números, retornar a soma de todos eles
// input: array
// output: um único valor
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const soma = num.reduce((acc, curr) => acc + curr); // essa merda recebe como parametro: acumulado, item, indice e array. por isso a gente tá chamando de acc (accumulated) e curr(current item)


// o processamento acontece em pares

// 3) Criar uma array somente com alunas que passaram de ano (média > 5)
const alunasPassantes = notasFinaisAlunas.filter(
    (item) => {
        const media = 5;
        const passou = item.notaFinal >= media;
        return passou;
    }
);

// reduce(): recebe uma array e retorna um valor só. Redutor.
// 1) Dado uma array de números, retornar a soma de todos eles
// input: array
// output: um único valor
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const soma = num.reduce(
    (acumulado, item) => {
        const somaAtual = acumulado + item;
        return somaAtual;
    }
);

// 2) Retornar o lucro de uma empresa
// se for saída, subtratir o valor
// se for entrada, adicionar o valor
const transacoes = [
    { descricao: "carro", valor: 32000, tipo: "saída" },
    { descricao: "cliente 1", valor: 10000, tipo: "entrada" },
    { descricao: "proventos", valor: 23000, tipo: "entrada" },
    { descricao: "salario 1", valor: 8500, tipo: "saída" }
];

const lucro = transacoes.reduce(
    (acumulado, item) => {
        console.log(item.tipo === "entrada");
        if (item.tipo === "entrada") {
            return acumulado + item.valor;
        } else {
            return acumulado - item.valor;
        }
    }, 0
);

//OU

const lucro = transacoes.reduce(
    (acumulado, item) => {
        if (item.tipo === "entrada") {
            return acumulado + item.valor;
        } else {
            return acumulado - item.valor;
        }
    }, 0
);

// o reduce recebe como primeiro parametro a funcao de callback. o segundo parâmetro pode ser um valor, e a gente costuma usar o 0 como VALOR ACUMULADO INICIAL. senão ele trava o acumulado no segundo loop e não funciona mais.



// sort(): organiza itens da array de acordo com uma verificação

// 1) Organizar números de forma decrescente

// 2) Organizar pessoas por ordem alfabética
const pessoasAlfabetico = [...pessoas].sort((a, b) => {
    if (a.nome < b.nome) {
        return -1;
    } else if (a.nome > b.nome) {
        return 1;
    } else {
        return 0;
    }
});




//3) retornar uma nova array somente com alunas que passaram de ano (media >5)

const notasAlunas = [{
        nome: "Julia",
        notas: [
            { materia: "matemática", nota: 7, peso: 1.5 },
            { materia: "portugues", nota: 3, peso: 2 }
        ]
    },
    {
        nome: "Zelia",
        notas: [
            { materia: "matemática", nota: 6, peso: 1.5 },
            { materia: "portugues", nota: 5, peso: 2 }
        ]
    },
    {
        nome: "Jussara",
        notas: [
            { materia: "matemática", nota: 8, peso: 1.5 },
            { materia: "portugues", nota: 2, peso: 2 }
        ]
    }
]

//antes precisa calcular a media ponderada:

const notasFinaisAlunas = notasAlunas.map(
    (aluna) => {
        console.log(aluna.notas); // aqui estamos usando o .notas para acessar o array na nossa funcao de callback
        // nosso input é um array
        // nosso output precisa ser um número
        // portanto nesse caso não cabe map, tampouco filter
        // pra calcular essa media ponderada, precisamos criar um loop dentro do array notas
        let somaNotas = 0;
        let somaPesos = 0;

        for (let i = 0; i < aluna.notas.length; i++) {
            const nota = arrNotas[i].nota;
            const peso = arrNotas[i].peso;
            const notaFinalMateria = nota * peso;
            somaNotas += notaFinalMateria;
            somaPesos += peso;
        } // essa merda toda pra conseguir fazer o cacete da média ponderada

        const notaFinal = somaNotas / somaPesos;

        const novaAluna = {
                nome: aluna.nome,
                notaFinal: notaFinal
            } // aqui estamos criando a buceta do objeto que vai receber o nome da corna da aluna

        return novaAluna;
    }
)

//aqui tinha um modelo a ser seguido pra bosta do objeto que dizia que era pra devolver um objeto exatamente assim com esse notaFinal ridículo porque as propriedades do objeto se nao forem em camelCase tem que ser como como string porra 

const alunasPassantes = notasFinaisAlunas.filter(
    (item) => { //aluna aqui esta no lugar do item
        const media = 5; // isso aqui existe só pra vc ter a porra do valor com que comparar a média
        const passou = item.notaFinal >= media; // só vai aparecer no array de retorno se o valor do item notaFinal for maior ou igual a media, que nada mais é que 5 infernooo
        return passou; // precisa de return senao nao retorna merda nenhuma
    }
);

console.log(alunasPassantes); // pra aparecer a desgraça da const que acabamos de definir aqui em cima

const numDecrescente = [...num].sort((a, b) => b - a);