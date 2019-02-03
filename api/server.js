const express = require("express");

const configMdlware = require("./config/middleware");
const publicRoute = require("./publicRoute");

const server = express();
configMdlware(server);

server.get('/', (req, res) => {
  res.status(200).send('Welcome to International Rural School Report');
});

server.use('/api', publicRoute);

module.exports = server;