import ClientRepository from "../models/alunoModel.js";

function findAll(req, res) {
    ClientRepository.findAll().then((result) => res.json(result));
}

function findAluno(req, res) {
    ClientRepository.findByPk(req.params.id).then((result) => res.json(result));
}

function addAluno(req, res) {
    ClientRepository.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        cpf: req.body.cpf,
        senha: req.body.senha,

    }).then((result) => res.json(result));
}

async function updateAluno(req, res) {
    await ClientRepository.update(
        {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            cpf: req.body.cpf,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    );

    ClientRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteAluno(req, res) {
    await ClientRepository.destroy({
        where: {
            id: req.params.id,
        },
    });

    ClientRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addAluno, findAluno, updateAluno, deleteAluno };
