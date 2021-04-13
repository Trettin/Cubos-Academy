const array = [
    {
        nome: "José",
        idade: 30,
        altura: 173
    }, 
    {
        nome: "Daniela",
        idade: 15,
        altura: 160
    }, 
    {
        nome: "Gariel",
        idade: 30,
        altura: 190
    }
];

// Código utilizando forEach()

// array.forEach(element => {
//     element.maioridade = element.idade >= 18 ? "É maior de idade" : "É menor de idade";
//     element.idade = `${element.idade} anos`;
//     element.altura = `${(element.altura/100).toFixed(2)}m`
// });

// console.log(array)

// Código utilizando map() feito por Juninnho na correção, 
// Observei que no código que eu mesmo desenvolvi acima fiz a mesma sintaxe que ele no objeto, com a diferença apenas que usei a função forEach() ao invés do map() e alterei os dados no array original.
// Pelo que foi falado na aula criar um novo array para os dados seria melhor pois juninho falou sobre dados que serão mostrados na tela enquanto que os dados originais do banco e dados permanecem os mesmos.

const dadosPessoas = array.map(x => {
    return {
        nome: x.nome,
        idade: `${x.idade} anos`,
        altura: `${(x.altura/100).toFixed(2)}m`,
        maioridade: x.idade >= 18 ? "É maior de idade" : "É menor de idade"
    }
});

console.log(dadosPessoas)