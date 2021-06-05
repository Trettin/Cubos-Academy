const conexao = require("../conexao");

const listarEmprestimos = async (req, res) => {
  try {
    const query =
      "select a.id, b.nome as usuario, b.telefone, b.email, c.nome as livro, a.status from emprestimos a join usuarios b on a.usuario_id = b.id join livros c on a.livro_id = c.id";
    const { rows: emprestimos } = await conexao.query(query);
    return res.status(200).json(emprestimos);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const consultarEmprestimo = async (req, res) => {
  const { id } = req.params;

  try {
    const query =
      "select a.id, b.nome as usuario, b.telefone, b.email, c.nome as livro, a.status from emprestimos a join usuarios b on a.usuario_id = b.id join livros c on a.livro_id = c.id where a.id = $1";
    const emprestimo = await conexao.query(query, [id]);

    if (emprestimo.rowCount === 0) {
      return res.status(404).json("Empréstimo não encontrado");
    }

    return res.status(200).json(emprestimo.rows[0]);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const cadastrarEmprestimo = async (req, res) => {
  const { usuario_id, livro_id } = req.body;

  if (!usuario_id) {
    return res.status(400).json("O campo usuario_id é obrigatório.");
  }
  if (!livro_id) {
    return res.status(400).json("O campo livro_id é obrigatório.");
  }

  try {
    const usuario = await conexao.query(
      "select * from usuarios where id = $1",
      [usuario_id]
    );
    if (usuario.rowCount === 0) {
      return res.status(404).json("Usuario não encontrado");
    }

    const livro = await conexao.query("select * from livros where id = $1", [
      livro_id,
    ]);
    if (livro.rowCount === 0) {
      return res.status(404).json("Livro não encontrado");
    }

    const query =
      "insert into emprestimos (usuario_id, livro_id) values ($1, $2)";
    const emprestimo = await conexao.query(query, [usuario_id, livro_id]);

    if (emprestimo.rowCount === 0) {
      return res.status(400).json("Não foi possivel cadastrar o empréstimo.");
    }

    return res.status(200).json("Empréstimos cadastrado com sucesso.");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const atualizarEmprestimo = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res
      .status(400)
      .json(
        "O campo status é obrigatório. Informe o status do empréstimo: 'pendente' ou 'devolvido'."
      );
  }

  if (status === "pendente" || status === "devolvido") {
    try {
      const emprestimos = await conexao.query(
        "select * from emprestimos where id = $1",
        [id]
      );

      if (emprestimos.rowCount === 0) {
        return res.status(404).json("Empréstimo não encontrado");
      }

      const query = "update emprestimos set status = $1 where id = $2";
      const emprestimoAtualizado = await conexao.query(query, [status, id]);

      if (emprestimoAtualizado.rowCount === 0) {
        return res.status(404).json("Não foi possível atualizar o empréstimo.");
      }

      return res.status(200).json("Empréstimo atualizado com sucesso.");
    } catch (error) {
      return res.status(400).json(error.message);
    }
  } else {
    return res
      .status(400)
      .json("Informe o status do empréstimo: 'pendente' ou 'devolvido'.");
  }
};

const excluirEmprestimo = async (req, res) => {
  const { id } = req.params;

  try {
    const emprestimo = await conexao.query(
      "select * from emprestimos where id = $1",
      [id]
    );

    if (emprestimo.rowCount === 0) {
      return res.status(404).json("Empréstimo não encontrado");
    }

    if (emprestimo.rows[0].status === "pendente") {
      return res
        .status(400)
        .json(
          "Só é possível excluir um empréstimo após o livro ser devolvido."
        );
    }

    const query = "delete from emprestimos where id = $1";
    const emprestimoExcluido = await conexao.query(query, [id]);

    if (emprestimoExcluido.rowCount === 0) {
      return res.status(404).json("Não foi possível excluir o empréstimo");
    }

    return res.status(200).json("Empréstimo excluido com sucesso.");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  listarEmprestimos,
  consultarEmprestimo,
  cadastrarEmprestimo,
  atualizarEmprestimo,
  excluirEmprestimo,
};
