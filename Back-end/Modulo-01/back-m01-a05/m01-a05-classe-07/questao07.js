const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};




function corrigirProva (prova) {
    let acertos = 0;
    for (let item of prova.questoes) {
        if (item.resposta === item.correta){
            acertos ++;
        }
    }
    let media = acertos / prova.questoes.length * 10 ;
    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${media}`)
}

corrigirProva(prova);