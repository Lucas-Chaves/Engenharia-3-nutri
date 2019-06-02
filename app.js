const express = require('express');
const CONFIGURATION = require('./configuration');
const services = require('./services/routes');

const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

//definindo o corpo do body em JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// definindo o uso de cors
app.use(cors());

// definindo todas as sub rotas de /api
app.use('/api', services);

// tudo que entra pela porta é executado !
app.listen(CONFIGURATION.PORT, () => console.log(`RUNNING ON PORT ${CONFIGURATION.PORT}`));
