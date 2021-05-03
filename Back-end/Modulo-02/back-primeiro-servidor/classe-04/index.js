const express = require("express");

const app = express();

app.get("/soma", (req, res)=> {
    const primeiro = Number(req.query.num1);
    const segundo = Number(req.query.num2);
    res.send(String(primeiro + segundo));
})
app.get("/subtrair", (req, res)=> {
    const primeiro = Number(req.query.num1);
    const segundo = Number(req.query.num2);
    res.send(String(primeiro - segundo));
})
app.get("/multiplicar", (req, res)=> {
    const primeiro = Number(req.query.num1);
    const segundo = Number(req.query.num2);
    res.send(String(primeiro * segundo));
})
app.get("/dividir", (req, res)=> {
    const primeiro = Number(req.query.num1);
    const segundo = Number(req.query.num2);
    res.send(String(primeiro / segundo));
})

app.listen(8000);