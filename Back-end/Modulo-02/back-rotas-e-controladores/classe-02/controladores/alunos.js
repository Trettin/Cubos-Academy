const alunos = require('../dados/alunos');
const cursos = require('../dados/cursos');

function listagemAlunos(req, res) {
    res.json(alunos);
}

function findId(itens, idConsultado) {
    return itens.find(item => item.id === Number(idConsultado));
}

function consultaAluno(req, res) {
    const idConsultado = Number(req.params.idConsultado)
    if (idConsultado) {
        const aluno = findId(alunos, idConsultado);
        if (!aluno) {
            res.status(404).json({erro: `Não encontramos o aluno com id ${idConsultado}.`})
            return;
        }
        res.json(aluno);
    } else {
        res.status(400).json({erro: `O id ${idConsultado} não é válido. Favor informe um id válido.`})
    }
    
}

function validarAluno(aluno) {
    if (!aluno.nome) {
        return "O campo 'nome' é obrigatório."
    }
    if (!aluno.sobrenome) {
        return "O campo 'sobrenome' é obrigatório."
    }
    if (!aluno.idade) {
        return "O campo 'idade' é obrigatório."
    }
    if (!aluno.curso) {
        return "O campo 'curso' é obrigatório."
    }
    if (!aluno.nome.replace(/\s/g, '').length || !aluno.sobrenome.replace(/\s/g, '').length || !aluno.curso.replace(/\s/g, '').length) {
        return "Nenhum campo pode estar em branco"
    }
    if (!Number(aluno.idade)) {
        return "A idade precisa ser um número"
    }
    if (aluno.idade < 18) {
        return "O aluno deve ser maior de idade"
    }

}

function validarCurso(cursos, curso) {
    const cursoPesquisado = cursos.find(x => x === curso);
    return !cursoPesquisado  ? "O curso informado não é válido" : false;
}

        
let proximoId = 1;
function matricularAluno(req, res) {
    const erro = validarAluno(req.body);
    if (erro) {
        res.status(400).json({erro});
        return;
    }

    const erroCurso = validarCurso(cursos, req.body.curso);
    if (erroCurso) {
        res.status(400).json({erroCurso})
        return;
    }

    const novoAluno = {
        id: proximoId,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: Number(req.body.idade),
        curso: req.body.curso
    };
    alunos.push(novoAluno);
    proximoId++;
    res.status(201).json();
}

function excluirAluno(req, res) {
    const idConsultado = Number(req.params.idConsultado)
    if (idConsultado) {
        const aluno = findId(alunos, idConsultado);
        if (!aluno) {
            res.status(404).json({erro: `Não encontramos o aluno com id ${req.params.idConsultado}.`})
            return;
        }
        alunos.splice(alunos.indexOf(alunos),1);
        res.json(aluno);
    } else {
        res.status(400).json({erro: `O id ${req.params.idConsultado} não é um número válido. Favor informe um id válido.`});
    }
}

function substituirAluno(req, res) {
    const idConsultado = Number(req.params.idConsultado);
    if (idConsultado) {

        const erro = validarAluno(req.body);
        if (erro) {
            res.status(400).json({erro});
            return;
        }
        const erroCurso = validarCurso(cursos, req.body.curso);
        if (erroCurso) {
            res.status(400).json({erroCurso})
            return;
        }
        if (req.body.id !== Number(req.params.idConsultado)) {
            res.status(400).json({erro: "O campo 'id' deve ser igual na rota e no corpo da requisição."});
            return;
        }  
        const aluno = findId(alunos, idConsultado);
        const novoAluno = req.body;

        if (aluno) {
            alunos.splice(alunos.indexOf(aluno),1, novoAluno);
        } else {
            alunos.push(novoAluno);
        }
        res.status(201).json(novoAluno);

    } else {
        res.status(400).json({erro: `O id ${req.params.idConsultado} não é um número válido. Favor informe um id válido.`});
    }
}

function editarAluno(req, res) {
    const aluno = findId(alunos, req.params.idConsultado);

    if (!aluno) {
        res.status(404).json({erro: `Aluno de id '${req.params.idConsultado}' não existe`});
        return;
    }

    const erro = validarAluno({
        nome: req.body.nome ?? aluno.nome,
        sobrenome: req.body.sobrenome ?? aluno.sobrenome,
        idade: req.body.idade ?? aluno.idade,
        curso: req.body.curso ?? aluno.curso,
    });

    if (erro) {
        res.status(400).json({erro});
        return;
    }

    if (req.body.nome) {
        aluno.nome = req.body.nome;
    }
    if (req.body.sobrenome) {
        aluno.sobrenome = req.body.sobrenome;
    }
    if (req.body.idade) {
        aluno.idade = Number(req.body.idade);
    }
    if (req.body.curso) {
        const erroCurso = validarCurso(cursos, req.body.curso);
        if (erroCurso) {
            res.status(400).json({erroCurso});
            return;
        }
        aluno.curso = req.body.curso;
    }

    res.json(aluno);
}

module.exports = {
    listagemAlunos,
    consultaAluno,
    matricularAluno,
    excluirAluno,
    substituirAluno,
    editarAluno
};