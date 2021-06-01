const express = require('express');
const { vote, votosRegistrados } = require('./controladores/votacao.js');

const rotas = express();

rotas.post('/votacao/:pais/:ip', vote);
rotas.get('/votacao', votosRegistrados)

module.exports = rotas;