const conexao = require("../conexao");

const listarUsuarios = async (req, res) => {};

const obterUsuario = async (req, res) => {};

const cadastrarUsuario = async (req, res) => {
  const { nome, idade, email, telefone, cpf } = req.body;

  if (!nome) {
    return res.status(400).json("O campo nome é obrigatório.");
  }
  if (!email) {
    return res.status(400).json("O campo email é obrigatório.");
  }
  if (!cpf) {
    return res.status(400).json("O campo cpf é obrigatório.");
  }
  if (String(cpf).length !== 11) {
    return res.status(400).json("O cpf deve conter 11 digitos.");
  }

  try {
    const query =
      "insert into usuarios (nome, idade, email, telefone, cpf) values ($1, $2, $3, $4, $5)";
    const usuario = await conexao.query(query, [
      nome,
      idade ?? null,
      email,
      telefone ?? null,
      cpf,
    ]);

    if (usuario.rowCount === 0) {
      return res.status(400).json("Não foi possivel cadastrar o usuário.");
    }

    return res.status(200).json("Usuário cadastrado com sucesso.");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const atualizarUsuario = async (req, res) => {};

const excluirUsuario = async (req, res) => {};

module.exports = {
  listarUsuarios,
  obterUsuario,
  cadastrarUsuario,
  atualizarUsuario,
  excluirUsuario,
};
