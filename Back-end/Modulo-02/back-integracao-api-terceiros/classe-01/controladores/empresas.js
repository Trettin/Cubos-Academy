const instanciaAxios = require('../servicos/abstract');
const fs = require('fs/promises')

const findDomain = async (req, res) => {
    const { dominioEmpresa } = req.params;
    const empresas = JSON.parse(await fs.readFile("./dados/empresas.json"));

    try {
        const domain = await instanciaAxios.get(`?api_key=1dfd46900b8048b18d92c3dcdbcac626&domain=${dominioEmpresa}`);
        console.log(domain.data);

        if (domain.data.name) {
            const temosEmpresa = empresas.find(empresa => empresa.name === domain.data.name);
            if (!temosEmpresa) {
                empresas.push(domain.data);
                await fs.writeFile("./dados/empresas.json", JSON.stringify(empresas));
            }
        }
        return res.json(domain.data);

    } catch (error) {
        const { data, status } = error.response;

        return res.status(status).json(data);
    }
}

module.exports = {
    findDomain
};