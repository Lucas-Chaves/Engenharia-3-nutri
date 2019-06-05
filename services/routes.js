const express = require('express');
const { getAllUsers } = require('../controller/user');

const services = express.Router();

// service to see the status of the API
services.get('/status',(request, response) => response.send('running'));
services.get('/user', getAllUsers);

module.exports = services;