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


app.listen(8000);