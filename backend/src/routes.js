const express = require('express');
const routes = express.Router();
const fetch = require("node-fetch");
const client_id = "Iv1.581d4b5fb4dc34b5";
const client_secret = "e02b66a95c206ca5e24bf8f42fb9238cd7229a79";


routes.get('/api/users?since={number}', (req,res)=>{
    res.send({status:'deu certo'});
});
routes.get('/api/users/:username/details', async (req,res)=>{
    console.log(req.params);
    return  res.json(await fetch(`https://api.github.com/users/${req.params.username}?client_id=${client_id}&client_secret=${client_secret}`).then((response)=>response.json()));
});
routes.get('/api/users/:username/repos', async (req,res)=>{
    return  res.json(await fetch(`https://api.github.com/users/${req.params.username}/repos?client_id=${client_id}&client_secret=${client_secret}`).then((response)=>response.json()));
});

module.exports = routes;