const instanciaAxios = require('../servicos/abstract');
const fs = require('fs/promises')

const vote = async (req, res) => {
    const { country, ip } = req.params;
    const vote = req.body;
    
    try {
        const {data:{country: ipCountry}} = await instanciaAxios.get(`?api_key=58cafbe4558f425d8e8c731e3b26fbe0&ip_address=${ip}`);
        if (country === ipCountry) {
            const votes = JSON.parse(await fs.readFile('./dados/votos.json'));
            const existeIp = votes.find(voto => voto.ip === ip);
            if (!existeIp) {
                votes.push({
                    ip: ip,
                    voto: vote.voto
                })
                await fs.writeFile("./dados/votos.json", JSON.stringify(votes, null, 2));
                res.status(201).json('Seu voto foi registrado.');
                return;
            }   
            res.status(429).json('Só é possível registrar um voto por IP.')
        }

        res.status(400).json('O IP enviado não coincide com o país da votação.');
    } catch (error) {
        res.status(400).json('O ip informado não é válido.');
    }
}

const votosRegistrados = async (req, res) => {
    res.json(JSON.parse(await fs.readFile('./dados/votos.json')));

}

module.exports = {
    vote,
    votosRegistrados
};