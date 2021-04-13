const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function carros(nomes, posicao) {
    let grupo = nomes.splice(posicao,3);
    console.log(grupo.join(" - "))
}

carros(nomes, posicao)