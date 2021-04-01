// Declare uma variávevl que armazena um objeto contendo dados de uma pessoa:
// nome, idade, profissão e altura.
// Faça uma função que tem um parâmetro e não retorna valores.
// Essa função deve imprimir na tela a apresentação de uma pessoa, seguindo o modelo abaixo:
// "Olá! Meu nome é João, sou um jovem de 12 anos , 1.4m de altura e sou estudante."
//  Se a pessoa tiver mais de 65 anos a palavra jovem deve ser substituida por idoso e se tiver mais de 25 e menos de 66 deve ser substituida por adulto.

const user1 = {
    nome: "Gabriel",
    idade: 30,
    profissao: "Desenvolvedor",
    altura: 1.90
}

let faixaEtaria = "";

function apresentar(pessoa) {
    if (pessoa.idade<=25) {
        faixaEtaria = "jovem";    
    } else if (pessoa.idade < 66) {
        faixaEtaria = "adulto";
    } else {
        faixaEtaria = "idoso"
    }
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um ${faixaEtaria} de ${pessoa.idade} anos , ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
}

apresentar(user1);