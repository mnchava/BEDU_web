const Mascota = require("../models/Mascota.js");

function crearMascota(req, res) {
  var mascota = new Mascota(req.body);
  res.status(201).send(mascota);
}

function obtenerMascotas(req, res) {
  var mascota1 = new Mascota(
    1,
    "Rocco",
    "Perro",
    "fotos",
    "Macho mediano",
    "Chava",
    "GDL"
  );
  var mascota2 = new Mascota(
    2,
    "Mina",
    "Perro",
    "fotos",
    "Hembra mediana",
    "Ani",
    "GDL"
  );
  res.send([mascota1, mascota2]);
}

function modificarMascota(req, res) {
  var mascota = new Mascota(req.params.id, "Juan", "Vega", "juan@vega.com");
  var modificaciones = req.body;
  mascota = { ...mascota, ...modificaciones };
  res.send(mascota);
}

function eliminarMascota(req, res) {
  res.status(200).send("Mascota ${req.params.id} eliminada");
}

module.exports = {
  crearMascota,
  obtenerMascotas,
  modificarMascota,
  eliminarMascota,
};
