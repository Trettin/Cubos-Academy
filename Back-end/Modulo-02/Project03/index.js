const express = require("express");

const app = express();

app.get("/soma", (req, res)=> {
    console.log(req.query);
    const primeiro = Number(req.query.primeirovalor);
    const segundo = Number(req.query.segundovalor);


    res.send(String(primeiro + segundo));
})

app.listen(8000);