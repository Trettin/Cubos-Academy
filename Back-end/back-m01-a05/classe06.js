
const user1 = {
    nome: "Gabriel",
    idade: 30,
    profissao: "Desenvolvedor",
    altura: 1.90
}

function faixaEtaria(idade) {
    if (idade<=25) {
        return "jovem";    
    } else if (idade < 66) {
        return "adulto";
    } else {
        return "idoso";
    }
}

function apresentar(pessoa) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um ${faixaEtaria(pessoa.idade)} de ${pessoa.idade} anos , ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
}

apresentar(user1);