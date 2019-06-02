const express = require('express');

const services = express.Router();

// service to see the status of the API
services.get('/status',(request, response) => response.send('running'));


module.exports = services;