function travaDeSenha(req, res, next) {
    if (req.method === "GET" || req.query.senha === "cubos123") {
        next();
    } else {
        res.status(401);
        res.json({mensagem: "Erro 401 - Senha incorreta"})
    }
}

module.exports = {
    travaDeSenha
}