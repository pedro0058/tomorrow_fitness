import ClientRepository from "../models/videoModel.js";

function findAll(req, res) {
    ClientRepository.findAll().then((result) => res.json(result));
}

function findVideo(req, res) {
    ClientRepository.findByPk(req.params.id).then((result) => res.json(result));
}

function addVideo(req, res) {
    ClientRepository.create({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        valor: req.body.valor,
    }).then((result) => res.json(result));
}

async function updateVideo(req, res) {
    await ClientRepository.update(
        {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            valor: req.body.valor,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    );

    ClientRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function deleteVideo(req, res) {
    await ClientRepository.destroy({
        where: {
            id: req.params.id,
        },
    });

    ClientRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addVideo, findVideo, updateVideo, deleteVideo };
