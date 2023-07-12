import express from "express";
import aluno from "./controllers/aluno.js";
import instrutor from "./controllers/instrutor.js";
import video from "./controllers/video.js";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const routes = express.Router();

routes.get("/", function(req,res){
    res.sendFile(__dirname + "/views/login.html");
});

routes.get("/aluno", aluno.findAll);
routes.post("/aluno", aluno.addAluno);
routes.get("/aluno/:id", aluno.findAluno);
routes.put("/aluno/:id", aluno.updateAluno);
routes.delete("/aluno/:id", aluno.deleteAluno);

routes.get("/instrutor", instrutor.findAll);
routes.post("/instrutor", instrutor.addInstrutor);
routes.get("/instrutor/:id", instrutor.findInstrutor);
routes.put("/instrutor/:id", instrutor.updateInstrutor);
routes.delete("/instrutor/:id", instrutor.deleteInstrutor);

routes.get("/video", video.findAll);
routes.post("/video", video.addVideo);
routes.get("/video/:id", video.findVideo);
routes.put("/video/:id", video.updateVideo);
routes.delete("/video/:id", video.deleteVideo);

export { routes as default };
