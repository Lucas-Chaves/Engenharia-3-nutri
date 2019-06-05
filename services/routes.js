const express = require('express');
const { getAllUsers, getUserById } = require('../controller/user');

const services = express.Router();

// service to see the status of the API
services.get('/status',(request, response) => response.send('running'));
//funcao de get de usuario !
services.get('/user', getAllUsers);
services.get('/user/:userId', getUserById);

module.exports = services;