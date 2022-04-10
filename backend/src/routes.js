const express = require('express');

const PerfilController = require('./controllers/PerfilController');
const IncidentController = require('./controllers/IncidentController');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/perfil', PerfilController.index);
routes.post('/perfil', PerfilController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete); 

routes.get('/user', UserController.index)

module.exports = routes;