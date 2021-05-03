const lodash = require("lodash");
const express = require("express");

const app = express();

app.get("/", (req, res)=> {
    console.log("Recebi um GET /");

    res.send("OI");
});

app.get("/academy", (req, res)=> {
    console.log("outro GET /");

    res.send("Meu primeiro servidor!!!!");
});

app.listen(8000);
