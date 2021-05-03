const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())

const livros = [
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158
    }
];

let proximoId = 3;

app.get("/livros", (req, res) => {
    res.json(livros);
})

app.get("/livros/:idConsultado", (req, res) => {
    const id = Number(req.params.idConsultado);
    if (id) {
        const livro = livros.find(livro => livro.id === id);
        if (livro) {
            res.json(livro);
        } else {
            res.json({
                mensagem: "Não existe livro para o ID informado."
            })
        }
    } else {
        res.json({
            mensagem: "O valor do parâmetro ID da URL não é um número válido."
        })
    }
})

app.post("/livros", (req, res) => {
    const novoLivro = {
        id: proximoId,
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        numPaginas: req.body.numPaginas
    }

    livros.push(novoLivro);
    proximoId++;
    res.send(novoLivro);
})

app.put("/livros/:idConsultado", (req, res) => {
    const livro = livros.find(
        liro => liro.id === Number(req.params.idConsultado)
    );
    if (livro) {
        livro.titulo = req.body.titulo;
        livro.autor = req.body.autor;
        livro.ano = req.body.ano;
        livro.numPaginas = req.body.numPaginas;
        
        res.json({mensagem: "Livro substituído."});
    } else {
        res.json({
            mensagem: "Não existe livro a ser substituído para o ID informado."
        }); 
    }
});

app.patch("/livros/:idConsultado", (req, res) => {
    const livro = livros.find(
        livro => livro.id === Number(req.params.idConsultado)
    );

    if (livro) {
        if (req.body.titulo !== undefined) {
            livro.titulo = req.body.titulo;
        }
        if (req.body.autor !== undefined) {
            livro.autor = req.body.autor;
        }
        if (req.body.ano !== undefined) {
            livro.ano = req.body.ano;
        }
        if (req.body.numPaginas !== undefined) {
            livro.numPaginas = req.body.numPaginas;
        }
        res.json({"mensagem": "Livro alterado."});
    } else {
        res.json({
            mensagem: "Não existe livro a ser alterado para o ID informado."
        })
    }
})

app.delete("/livros/:idConsultado", (req, res) => {
    const livro = livros.find(livro => livro.id === Number(req.params.idConsultado));
    const indice = livros.indexOf(livro);
    
    if (livro) {
        livros.splice(indice, 1);
        res.json({
            mensagem: "Livro removido."
        })
    } else {
        res.json({
            mensagem: "Não existe livro a ser removido para o ID informado."
        })
    }
})


app.listen(8000);