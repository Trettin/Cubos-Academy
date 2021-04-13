const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda'];
const tamanhoDoGrupo = 2;

function separarGrupos (nomes, tamanhoDoGrupo) {
    let grupos = 1;
    while (nomes.length>= tamanhoDoGrupo) {
        let grupo = nomes.splice(0, tamanhoDoGrupo).join(", ");
        console.log(`Grupo ${grupos}: ${grupo}`)
        grupos++;
    }
    if (nomes.length>0) {
        console.log(`Grupo ${grupos}: ${nomes.join(", ")}`)
    }
}

separarGrupos(nomes, tamanhoDoGrupo);