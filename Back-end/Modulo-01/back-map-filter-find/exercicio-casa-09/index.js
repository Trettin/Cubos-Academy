const pessoas = [
    {
        nome: 'Antonio',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Maria',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Ana',
        idade: 21,
        profissao: 'Programador'
    },
    {
        nome: 'Beatriz',
        idade: 20,
        profissao: 'Programador'
    },
    {
        nome: 'José',
        idade: 32,
        profissao: 'Jornalista'
    },
    {
        nome: 'Marcos',
        idade: 30,
        profissao: 'Programador'
    }
];

const dev20 = pessoas.filter(x=> x.idade > 20 && x.profissao === "Programador");
console.log(dev20);

const jornalista30 = pessoas.filter(x=> x.idade > 30 && x.profissao === "Jornalista");
console.log(jornalista30);

const devJornJovem = pessoas.filter(x=> x.idade < 29 && x.profissao === "Jornalista" || x.profissao === "Programador" && x.idade < 29);
console.log(devJornJovem);
