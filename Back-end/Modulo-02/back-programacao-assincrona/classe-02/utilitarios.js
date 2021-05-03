const fs = require('fs/promises')

async function findCep(cepConsultado, enderecos) {
    const cepFormatado = cepConsultado.slice(0, 5) + '-' + cepConsultado.slice(5)

    let busca;
    for (let endereco of enderecos) {
        if (endereco.cep === cepFormatado) {
            busca = endereco;
            break;
        }
    }
    return busca;
}

async function novoEndereco(novoEndereco, enderecos) {
    if (novoEndereco.length > 1) {
        enderecos.push(...novoEndereco);
        await fs.writeFile("enderecos.json", JSON.stringify(enderecos));
        return;
    }

    enderecos.push(novoEndereco);
    await fs.writeFile("enderecos.json", JSON.stringify(enderecos));
}

async function findLogradouro(logradouro, enderecos) {
    let busca;
    for (let endereco of enderecos) {
        if (endereco.logradouro === logradouro) {
            busca = endereco;
            break;
        }
    }
    return busca;
}

module.exports = {
    findCep,
    novoEndereco,
    findLogradouro
};