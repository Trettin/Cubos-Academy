const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: true,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: true,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
]

function filtroIdadeCnh (array) {
    const idadeOk = usuários.filter(pessoa=> pessoa.idade>=18 && pessoa.idade<65);
    const temCnh = idadeOk.every(pessoa => pessoa.habilitado);
    if (temCnh) {
        console.log("todos passaram no teste")
    } else {
        console.log("todos precisam estar habilitados")
    }
}

filtroIdadeCnh(usuários);