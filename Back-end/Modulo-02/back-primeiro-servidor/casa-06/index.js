const express = require("express");

const app = express();

let segundos = 0;
let minutos = 0;

function cronometro(min, seg) {
    if (segundos === 60){
        segundos = 0;
        minutos++;
    } else {
        segundos++;
    }
}

let intervalId = ""; 

app.get("/", (req, res)=> {
    res.send(`Tempo atual do cronômetro: ${String(minutos).padStart(2,'0')} minuto(s) e ${String(segundos).padStart(2,'0')} segundo(s).`)
})
app.get("/iniciar", (req, res)=> {
    intervalId = setInterval(cronometro, 1000, minutos, segundos)
    res.send("Cronômetro iniciado!")
})
app.get("/pausar", (req, res)=> {
    clearInterval(intervalId);
    res.send("Cronômetro pausado!")
})
app.get("/continuar", (req, res)=> {
    intervalId = setInterval(cronometro, 1000, minutos, segundos)
    res.send("Cronômetro continuando!")
})
app.get("/zerar", (req, res)=> {
    minutos = 0;
    segundos = 0;
    res.send("Cronômetro zerado!")
})

app.listen(8000);