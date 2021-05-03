const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

app.get("/convidados", (req, res) => {
    const nome = req.query.nome;
    
    if (!nome) {
        res.json(convidados);
    } else {
        const convidado = convidados.find(convidado => convidado === nome);
        if (!convidado){
            res.status(400)
            res.json({mensagem: "O convidado buscado não está presente na lista."})
        } else {
            res.json({mensagem: "Convidado presente."})
        }
    }
})

app.post("/convidados", (req, res) => {
    const novoConvidado = {
        nome: req.body.nome,
    }
    const convidadoExistente = convidados.find(convidado => convidado === novoConvidado.nome);
    
    if (convidadoExistente) {
        res.json({
            mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
        })
    } else {
        convidados.push(novoConvidado.nome);
        res.json({
            mensagem: "Convidado adicionado."
        })
    }
})

app.delete("/Convidados/:nome", (req, res) => {
    const convidado = convidados.find(convidado => convidado === req.params.nome);
    const indice = convidados.indexOf(convidado);
    
    if (convidado) {
        convidados.splice(indice, 1);
        res.json({
            mensagem: "Convidado removido."
        })
    } else {
        res.json({
            mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
        })
    }
})

app.listen(8000);