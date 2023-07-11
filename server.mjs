import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from "express";
import routes from "./routes.js";
import db from "./db.js"
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


// Config
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'})); 
    app.set('view engine', 'handlebars');

    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //app.use(express.json());
    app.use(routes);
    app.use("/images", express.static(path.join(__dirname, "/public/images")));
    app.use("/css", express.static(path.join(__dirname, "/public/css")));

    app.get('/login', function(req,res) {
        res.render('login', {style: 'stylesheet_login.css'})
    });

    app.get('/cadastro_video', function(req,res) {
        res.render('cadastro_video', {style: 'stylesheet_cadastrar_video.css'})
    });

    app.get('/cadastro', function(req,res) {
        res.render('cadastro', {style: 'stylesheet.css'})
    });

    app.get('/home', function(req,res) {
        res.render('home', {style: 'stylesheet_home.css', videos: app.get('/videos')})
    });

    app.get('/perf_alu', function(req,res) {
        res.render('perf_alu', {style: 'stylesheet_alu.css'})
    });

    app.get('/perf_ins', function(req,res) {
        res.render('perf_ins', {style: 'stylesheet_instrutor.css'})
    });

    app.get('/editar_perfil', function(req,res) {
        res.render('editar_perfil', {style: 'editar_perfil.css'})
    });

db.sync(() => console.log(`Database connected: ${process.env.DB_NAME}`));

app.listen(3000, () => console.log("Server Start at 3000"));
