const express = require("express");

const app = express();

app.get("/livros/:numero", (req, res)=> {
    console.log(req.params);
    if (req.params.numero === "1"){
        res.send("Livro Um")
    } else if (req.params.numero === "2") {
        res.send("Livro dois")
    } else if (req.params.numero === "3") {
        res.send("Livro três") 
    } else {
        res.status(404);
        res.send("O livro " + req.params.numero + " não existe.")
    }
    res.send("teste");
})

// app.get("/livros/1", (req, res)=> {
//     res.send("Livro Um");
// })
// app.get("/livros/2", (req, res)=> {
//     res.send("Livro Dois");
// })
// app.get("/livros/3", (req, res)=> {
//     res.send("Livro Três");
// })

app.listen(8000);
