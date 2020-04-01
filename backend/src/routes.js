const express = require('express');

const connection = require('./database/connections');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionsController = require('./controllers/SessionsController');



const routes = express.Router();

routes.post('/sessions', SessionsController.create)


routes.get('/ongs', OngController.index);   // Listagem
routes.post('/ongs' /* Recurso */, OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
