const express = require("express");

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogador = 0;

app.get("/", (req, res)=> {
    res.send(`É a vez de ${jogadores[jogador]} jogar!`);
    if (jogador === jogadores.length-1){
        jogador = 0;
    } else if (jogador < jogadores.length-1) {
        jogador++;
    }
})
app.get("/remover", (req, res)=> {
    const indice = req.query.indice
    if (indice < jogadores.length) {
        jogadores.splice(indice,1)
        res.send(jogadores);
    } else {
        res.send(`Não existe jogador no índice informado ${indice} para ser removido.`)
    }
})
app.get("/adicionar", (req, res)=> {
    let nome = req.query.nome
    nome = nome[0].toUpperCase()+nome.slice(1).toLowerCase()
    const indice = req.query.indice

    if (!nome) {
        return res.send("Você precisa informar um nome")
    } 
    if (indice) {
        if (indice < jogadores.length){
            jogadores.splice(indice, 0, nome);
            res.send(jogadores);
        } else {
            res.send(`O índice informado ${indice} não existe no array. Novo jogador não adicionado.`);
        }
    } else {
        jogadores.push(nome);
        res.send(jogadores);
    }
})

app.listen(8000);