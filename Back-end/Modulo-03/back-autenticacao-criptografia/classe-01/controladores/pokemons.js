const conexao = require("../conexao");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../jwt_secret");

const listarPokemons = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json("O campo token é obrigatório.");
  }

  try {
    jwt.verify(token, jwtSecret);

    try {
      const query =
        "select a.id, b.nome as usuario, a.nome, a.apelido, a.habilidades, a.imagem  from pokemons a join usuarios b on a.usuario_id = b.id";
      const pokemons = await conexao.query(query);

      if (pokemons.rowCount === 0) {
        return res.status(500).json("Não foi possível listar os pokemons.");
      }

      pokemons.rows.map((poke) => {
        const habilidadesArray = poke.habilidades.split(",");
        return (poke.habilidades = habilidadesArray);
      });

      return res.status(200).json(pokemons.rows);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  } catch (error) {
    return res.status(400).json("O token fornecido é válido.");
  }
};

const consultarPokemon = async (req, res) => {
  const { token } = req.body;
  const { id } = req.params;

  if (!token) {
    return res.status(400).json("O campo token é obrigatório.");
  }

  try {
    jwt.verify(token, jwtSecret);

    try {
      const query = "select * from pokemons where id = $1";
      const pokemon = await conexao.query(query, [id]);

      if (pokemon.rowCount === 0) {
        return res.status(500).json("Não foi possível encontrar o pokemon.");
      }

      pokemon.rows.map((poke) => {
        const habilidadesArray = poke.habilidades.split(",");
        return (poke.habilidades = habilidadesArray);
      });

      return res.status(200).json(pokemon.rows);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  } catch (error) {
    return res.status(400).json("O token fornecido é válido.");
  }
};

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

const atualizarPokemon = async (req, res) => {
  const { apelido, token } = req.body;
  const { id } = req.params;

  if (!token) {
    return res.status(400).json("O campo token é obrigatório.");
  }
  if (!apelido) {
    return res.status(400).json("O campo apelido é obrigatório.");
  }

  try {
    jwt.verify(token, jwtSecret);

    try {
      const query = "update pokemons set apelido = $1 where id = $2";
      const pokemon = await conexao.query(query, [apelido, id]);

      if (pokemon.rowCount === 0) {
        return res
          .status(400)
          .json("Não foi possível atualizar o pokemon. Tente outro id.");
      }

      return res.status(200).json("Pokemon atualizado com sucesso.");
    } catch (error) {
      return res.status(400).json(error.message);
    }
  } catch (error) {
    return res.status(400).json("O token fornecido é válido.");
  }
};

const excluirPokemon = async (req, res) => {
  const { token } = req.body;
  const { id } = req.params;

  if (!token) {
    return res.status(400).json("O campo token é obrigatório.");
  }

  try {
    jwt.verify(token, jwtSecret);

    try {
      const query = "delete from pokemons where id = $1";
      const pokemon = await conexao.query(query, [id]);

      if (pokemon.rowCount === 0) {
        return res
          .status(400)
          .json("Não foi possível excluir o pokemon. Tente outro id.");
      }

      return res.status(200).json("Pokemon excluído com sucesso.");
    } catch (error) {
      return res.status(400).json(error.message);
    }
  } catch (error) {
    return res.status(400).json("O token fornecido é válido.");
  }
};

module.exports = {
  listarPokemons,
  consultarPokemon,
  cadastrarPokemon,
  atualizarPokemon,
  excluirPokemon,
};
