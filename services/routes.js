const express = require('express');
const { getAllUsers, getUserById, createUser, deleteUser } = require('../controller/user');
const { getAllGrupo, getGrupoById, createGrupo, deleteGrupo  } = require('../controller/grupo');

const services = express.Router();

// service to see the status of the API
services.get('/status',(request, response) => response.send('running'));
//rotas de usuario !
services.get('/user', getAllUsers);
services.get('/user/:userId', getUserById);
services.post('/user', createUser);
services.delete('/user/:userId', deleteUser);
module.exports = services;
//Rotas de Grupo !
services.get('/grupo', getAllGrupo);
services.get('/grupo/:grupoId', getGrupoById);
services.post('/grupo', createGrupo);
services.delete('/grupo/:grupoId', deleteGrupo);
