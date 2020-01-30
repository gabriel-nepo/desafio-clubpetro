const express = require('express');
const routes = require('./routes.js');
const http = require('http');

const app = express();
const server = http.Server(app);

// GET, POST , PUT ,DELETE

// req.query  = acessar query params( para filtros)
// req.params = acessar rout params ( para edicao e delete)
// req.body = acessar corpo da requisicao(para criacao, edicao)

app.use(express.json());
app.use(routes);


server.listen(3000,()=>{
    console.log("backeasdand em funcionamento");
});