const express = require('express');
const { consultaCep, consultaEndereco } = require('./controladores/enderecos')


const roteador = express();

roteador.get("/enderecos/:cep", consultaCep)
roteador.get("/enderecos/:estado/:cidade/:logradouro", consultaEndereco)

module.exports = roteador;