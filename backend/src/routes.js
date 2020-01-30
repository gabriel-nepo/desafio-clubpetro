const express = require('express');
const routes = express.Router();
const fetch = require("node-fetch");

routes.get('/api/users?since=:number', (req,res)=>{

    res.send({status:'deu certo'});
});
routes.get('/api/users/:username/details', async (req,res)=>{
    console.log(req.params);
    return  res.json(await fetch(`https://api.github.com/users/${req.params.username}`).then((response)=>response.json()));
});
routes.get('/api/users/:username/repos', async (req,res)=>{
    return  res.json(await fetch(`https://api.github.com/users/${req.params.username}/repos`).then((response)=>response.json()));
});

module.exports = routes;