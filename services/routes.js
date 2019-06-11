const express = require('express');
const { getAllUsers, getUserById, createUser, deleteUser } = require('../controller/user');
const { getAllGrupo, getGrupoById, createGrupo, deleteGrupo  } = require('../controller/grupo');
const { getAllImc, getImcById, createImc, deleteImc  } = require('../controller/imc');
const { getAllReceita, getReceitaById, createReceita, deleteReceita  } = require('../controller/receita');
const { login } = require('../controller/oauth');
const { isAuth } = require('../middleware/auth');
const { getAlimentos, getAlimentoById, getAlimentosByUserId, createAlimentos, deleteAlimento } = require('../controller/alimentos');
const services = express.Router();

// service to see the status of the API
services.get('/status',(request, response) => response.send('running'));
//rotas de usuario !
services.get('/user', getAllUsers);
services.get('/user/:userId', getUserById);
services.post('/user', createUser);
services.delete('/user/:userId', deleteUser);

//Rotas de Grupo !
services.get('/grupo', getAllGrupo);
services.get('/grupo/:grupoId', getGrupoById);
services.post('/grupo', createGrupo);
services.delete('/grupo/:grupoId', deleteGrupo);
//Rotas para IMC
services.get('/imc/:userId', getAllImc);
services.get('/imc/:userId/:imcId', getImcById);
services.post('/imc',isAuth, createImc);
services.delete('/imc/:userId/:imcId', deleteImc);
//Rotas para Receitas
services.get('/receita', getAllReceita);
services.get('/receita/:receitaId', getReceitaById);
services.post('/receita', createReceita);
services.delete('/receita/:receitaId', deleteReceita);

// rotas de login
services.post('/oauth/login', login);

// rotas de alimento com middleware
services.get('/alimento', getAlimentos);
services.get('/alimento/:alimentoId', getAlimentoById);
services.post('/alimento', isAuth, createAlimentos);
services.delete('/alimento/:alimento', isAuth, deleteAlimento);

module.exports = services;