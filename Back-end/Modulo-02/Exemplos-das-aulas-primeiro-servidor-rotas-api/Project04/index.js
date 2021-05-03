const express = require("express");

const app = express();

let contador = 0;

app.get("/contador", (req, res)=> {
    contador++;
    res.send(`Você já abriu essa página ${contador} vez(es)`);
})

app.get("/zerar", (req, res)=> {
    contador = 0;
    res.send("Zerei!")
})

app.get("/atribuir", (req, res)=> {
    const valor = req.query.valor;

    if (valor === undefined) {
        res.status(400)
        res.send("Você precisa informar o valor")
    } else {
        contador = Number(valor);
        res.send("Atribuido com sucesso")
    }

    
})


app.listen(8000);