const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

// Listagem
routes.get('/ongs', OngController.index);
routes.get('/incidents', IncidentController.index);
routes.get('/profiles', ProfileController.index);

// Cadastro
routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidentController.create);
routes.post('/sessions', SessionController.create);

// Deletar
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes