import ClientRepository from "../models/instrutorModels.js";

function findAll(req, res) {
    ClientRepository.findAll().then((result) => res.json(result));
}

function findInstrutor(req, res) {
    ClientRepository.findByPk(req.params.id).then((result) => res.json(result));
}

function addInstrutor(req, res) {
    ClientRepository.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        cpf: req.body.cpf,
        formacao: req.body.formacao,
        senha: req.body.senha,

    }).then((result) => res.json(result));
}

async function updateInstrutor(req, res) {
    await ClientRepository.update(
        {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            cpf: req.body.cpf,
            formacao: req.body.formacao,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    );

    ClientRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteInstrutor(req, res) {
    await ClientRepository.destroy({
        where: {
            id: req.params.id,
        },
    });

    ClientRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addInstrutor, findInstrutor, updateInstrutor, deleteInstrutor };
