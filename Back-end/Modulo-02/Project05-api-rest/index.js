const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())

//GET /instrutores
//GET /instrutores/2
//POST, PATCH, PUT, DELETE

const listaDeInstrutores = [
    {
        id: 1,
        nome: "Junior",
        idade: 29,
        areaDeAtuacao: "Logica",
    },
    {
        id: 2,
        nome: "Dina",
        idade: 19,
        areaDeAtuacao: "Back-end",
    },
    {   
        id: 3,
        nome: "Guido",
        idade: 30,
        areaDeAtuacao: "Full-stack",
    }
]

let proximoId = 4;

app.get("/instrutores", (req, res) => {
    res.json(listaDeInstrutores);
})

app.get("/instrutores/:idConsultado", (req, res) => {
    const instrutor = listaDeInstrutores.find(
        instrutor => instrutor.id === Number(req.params.idConsultado)
        );
    res.json(instrutor);
})

app.post("/instrutores", (req, res) => {
    console.log(req.body);

    const novoInstrutor = {
        id: proximoId,
        nome: req.body.nome,
        idade: req.body.idade,
        areaDeAtuacao: req.body.areaDeAtuacao
    }

    listaDeInstrutores.push(novoInstrutor);

    proximoId++;

    res.send(novoInstrutor);
})

app.patch("/instrutores/:idConsultado", (req, res) => {
    const instrutor = listaDeInstrutores.find(
        instrutor => instrutor.id === Number(req.params.idConsultado)
    );

    if (req.body.nome !== undefined) {
        instrutor.nome = req.body.nome;
    }
    if (req.body.idade !== undefined) {
        instrutor.idade = req.body.idade;
    }
    if (req.body.areaDeAtuacao !== undefined) {
        instrutor.areaDeAtuacao = req.body.areaDeAtuacao;
    }
    res.send(instrutor);
})

app.put("/instrutores/:idConsultado", (req, res) => {
    const instrutor = listaDeInstrutores.find(
        instrutor => instrutor.id === Number(req.params.idConsultado)
    );
    if (instrutor) {
        instrutor.nome = req.body.nome;
        instrutor.idade = req.body.idade;
        instrutor.areaDeAtuacao = req.body.areaDeAtuacao;
        res.send(instrutor);
    } else {
        const novoInstrutor = req.body;
        listaDeInstrutores.push(novoInstrutor);
        res.json(novoInstrutor); 
    }
});

app.delete("/instrutores/:idConsultado", (req, res) => {
    const instrutor = listaDeInstrutores.find(
        instrutor => instrutor.id === Number(req.params.idConsultado)
    );
    const indice = listaDeInstrutores.indexOf(instrutor);
    
    listaDeInstrutores.splice(indice, 1);

    res.json(instrutor);
})


app.listen(8000);