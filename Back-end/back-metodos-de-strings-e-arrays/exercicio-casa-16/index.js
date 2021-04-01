const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', '   Vitinho   Cabelo ', 'Nanda'];
const tamanhoDoGrupo = 4;

function geraNick(nomes, posicao) {
    let nick = `@${nomes[posicao].trim().toLowerCase()}`;
    while (nick.includes(" ")) {
        nick = nick.replace(" ", "");
    }
    nick = nick.substr(0, 13)
    console.log(nick);
}
geraNick(nomes, tamanhoDoGrupo)