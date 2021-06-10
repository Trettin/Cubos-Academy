const conexao = require("../conexao");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../jwt_secret");

const listarpokemons = async (req, res) => {};

const consultarPokemon = async (req, res) => {};

const cadastrarPokemon = async (req, res) => {
  const { nome, apelido, habilidades, imagem, token } = req.body;

  if (!nome) {
    return res.status(400).json("O campo nome é obrigatório.");
  }
  if (!habilidades) {
    return res.status(400).json("O campo habilidades é obrigatório.");
  }
  if (!token) {
    return res.status(400).json("O campo token é obrigatório.");
  }
  if (!isNaN(nome)) {
    return res.status(400).json("O nome deve ser uma string.");
  }
  if (!isNaN(habilidades)) {
    return res
      .status(400)
      .json(
        "O campo habilidades deve ser uma string e elas devem ser separadas por vírgulas."
      );
  }

  try {
    const usuario = jwt.verify(token, jwtSecret);
    console.log(`${usuario.nome} está criando um pokemon.`);

    let query =
      "insert into pokemons (usuario_id, nome, habilidades) values ($1, $2, $3)";
    let values = [usuario.id, nome, habilidades];

    if (apelido) {
      query =
        "insert into pokemons (usuario_id, nome, apelido, habilidades) values ($1, $2, $3, $4)";
      values = [usuario.id, nome, apelido, habilidades];
    }
    if (imagem) {
      query =
        "insert into pokemons (usuario_id, nome, apelido, habilidades, imagem) values ($1, $2, $3, $4, $5)";
      values = [usuario.id, nome, apelido, habilidades, imagem];
    }

    try {
      const pokemon = await conexao.query(query, values);
      if (pokemon.rowCount === 0) {
        return res.status(500).json("Não conseguimos cadastrar o pokemon.");
      }

      return res.status(200).json("Yay, pokemon cadastrado com sucesso.");
    } catch (error) {
      return res.status(400).json(error.message);
    }
  } catch (error) {
    return res.status(400).json("O token fornecido é válido.");
  }
};

const atualizarPokemon = async (req, res) => {};

const excluirPokemon = async (req, res) => {};

module.exports = {
  listarpokemons,
  consultarPokemon,
  cadastrarPokemon,
  atualizarPokemon,
  excluirPokemon,
};
