const Usuario = require("../models/Usuario.js");

function crearUsuario(req, res) {
  var usuario = new Usuario(req.body);
  res.status(201).send(usuario);
}

function obtenerUsuarios(req, res) {
  var usuario1 = new Usuario(1, "Juan", "Vega", "juan@vega.com");
  var usuario2 = new Usuario(2, "Monserrat", "Vega", "mon@vega.com");
  res.send([usuario1, usuario2]);
}

function modificarUsuario(req, res) {
  var usuario1 = new Usuario(req.params.id, "Juan", "Vega", "juan@vega.com");
  var modificaciones = req.body;
  usuario1 = { ...usuario1, ...modificaciones };
  res.send(usuario1);
}

function eliminarUsuario(req, res) {
  res.status(200).send(`Usuario ${req.params.id} eliminado`);
}

module.exports = {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario,
};
