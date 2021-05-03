const express = require('express');
const {listagemAlunos, consultaAluno, matricularAluno, excluirAluno, substituirAluno, editarAluno} = require('./controladores/alunos');

const roteador = express();

roteador.get("/alunos", listagemAlunos)
roteador.get("/alunos/:idConsultado", consultaAluno)
roteador.post("/alunos", matricularAluno)
roteador.delete("/alunos/:idConsultado", excluirAluno)
roteador.put("/alunos/:idConsultado", substituirAluno)
roteador.patch("/alunos/:idConsultado", editarAluno)

module.exports = roteador;