const listaDeImoveis = require('../dados/imoveis');

function get(req, res) {
    res.json(listaDeImoveis);
}

function getPorId(req, res) {
    const imovel = listaDeImoveis.find(imovel=> imovel.id === Number(req.params.idConsultado));
    if (!imovel) {
        res.status(404);
        res.json({erro: `Imóvel com id ${req.params.idConsultado} não existe`})
        return;
    }
    res.json(imovel);
}



module.exports = {
    get,
    getPorId
};