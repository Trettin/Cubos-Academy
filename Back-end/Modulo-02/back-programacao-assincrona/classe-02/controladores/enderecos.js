const axios = require('axios');
const fs = require('fs/promises');
const { findCep, novoEndereco, findLogradouro } = require('../utilitarios')


async function consultaCep(req, res) {
    const cepConsultado = req.params.cep;

    const enderecos = JSON.parse(await fs.readFile('enderecos.json'));

    const cepBuscado = await findCep(cepConsultado, enderecos);
    if (cepBuscado) {
        res.json(cepBuscado)
        return;
    }
    const response = await axios.get(`https://viacep.com.br/ws/${cepConsultado}/json/`);
    novoEndereco(response.data, enderecos);
    res.json({
        Endereço: response.data
    })
}

async function consultaEndereco(req, res) {
    const estado = req.params.estado;
    const cidade = req.params.cidade;
    const logradouro = req.params.logradouro

    const enderecos = JSON.parse(await fs.readFile('enderecos.json'));

    const logradouroBuscado = await findLogradouro(logradouro, enderecos);
    if (logradouroBuscado) {
        res.json(logradouroBuscado);
        return;
    }
    const response = await axios.get(`https://viacep.com.br/ws/${estado}/${cidade}/${logradouro}/json/`);
    novoEndereco(response.data, enderecos);
    res.json({
        Endereço: response.data
    })
}

module.exports = {
    consultaCep,
    consultaEndereco
}