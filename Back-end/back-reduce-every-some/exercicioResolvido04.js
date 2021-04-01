const pessoas = [
    {
        nome: 'Diego',
        idade: 57
    },
    {
        nome: 'João',
        idade: 27
    },
    {
        nome: 'Amanda',
        idade: 12
    },
    {
        nome: 'Bruno',
        idade: 12
    },
    {
        nome: 'Samanta',
        idade: 27
    }
];

pessoas.sort((pessoa1, pessoa2)=> {
    if(pessoa1.idade < pessoa2.idade){
        return -1
    } else if (pessoa1.idade>pessoa2.idade) {
        return 1
    } else if (pessoa1.idade=== pessoa2.idade){
        return pessoa1.nome.localeCompare(pessoa2.nome)
    }
})
console.log(pessoas)