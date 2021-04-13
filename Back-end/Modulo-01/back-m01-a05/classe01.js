const pessoa = {
    nome: "Gabriel",
    idade: 30,
    altura: 1.90,
    cnh: true,
    
    apelidos: ["Gabe", "Trettin"],
};

let possuiCnh = pessoa.cnh ? "possui CNH":"não possui CNH";

function escrevaApelidos() {
    for (let i = 0; i<pessoa.apelidos.length; i++) {
    console.log(`- ${pessoa.apelidos[i]}`)
    }
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${possuiCnh} e tem os seguintes apelidos:`)
escrevaApelidos();
