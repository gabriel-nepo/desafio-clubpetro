const express = require('express');
const routes = require('./routes.js');
const http = require('http');
const cors = require('cors')
const app = express();
const server = http.Server(app);

// GET, POST , PUT ,DELETE

// req.query  = acessar query params( para filtros)
// req.params = acessar rout params ( para edicao e delete)
// req.body = acessar corpo da requisicao(para criacao, edicao)

app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(8000,()=>{
    console.log("backend em funcionamento");
});

module.exports = app;