const express = require("express");

const configMdlware = require("./config/middleware");
const publicRoute = require("./publicRoute");
const restrictedRoute = require('./restrictedRoute');
const authenticate = require('./middleware/authenticate');

const server = express();
configMdlware(server);

server.get('/', (req, res) => {
  res.status(200).send('Welcome to International Rural School Report');
});

server.use('/api', publicRoute);
server.use('/user', authenticate, restrictedRoute);

module.exports = server;