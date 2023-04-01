const express = require("express");
const router = require("./router");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const server = express();
//La request llega al servidor y quieroo que la request que llego, tome este camino.

server.use(bodyParser.json()); // parsea el body a formato json. npm i body-parser

server.use(morgan("dev")); //middleware agarra la req, pasa por aca, la libera,
// y  luego se encuentra con router.

server.use(router); /* busca la req en router.
 lleva la request a su endpoint, en su ruta que corresponda por ejemplo
 una ruta /users    de .get.
Este sera el endpoint de la peticion.*/

module.exports = server;
