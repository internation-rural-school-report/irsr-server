const express = require("express");

const configMdlware = require("./config/middleware");

const server = express();
configMdlware(server);

module.exports = server;