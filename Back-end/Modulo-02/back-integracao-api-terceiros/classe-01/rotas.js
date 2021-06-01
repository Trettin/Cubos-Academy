const express = require('express');
const { findDomain } = require('./controladores/empresas.js');

const rotas = express();

rotas.get('/empresa/:dominioEmpresa', findDomain);

module.exports = rotas;