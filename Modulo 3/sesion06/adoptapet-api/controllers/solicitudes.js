const mongoose = require("mongoose");
const Solicitud = mongoose.model("Solicitud");

function crearSolicitud(req, res, next) {
  var Solicitud = new Solicitud(req.body);
  Solicitud.estado = "Pendiente";
  Solicitud.save()
    .then((Solicitud) => {
      res.status(201).send(Solicitud);
    })
    .catch(next);
}

function obtenerSolicitud(req, res, next) {
  if (req.params.id) {
    Solicitud.findById(req.params.id)
      .then((Solicitud) => {
        res.send(Solicitud);
      })
      .catch(next);
  } else {
    Solicitud.find()
      .then((Solicitudes) => {
        res.send(Solicitudes);
      })
      .catch(next);
  }
}

function modificarSolicitud(req, res, next) {
  Solicitud.findById(req.params.id)
    .then((Solicitud) => {
      if (!Solicitud) {
        return res.sendStatus(401);
      }
      let nuevaInfo = req.body;
      if (typeof nuevaInfo.nombre !== "undefined")
        Solicitud.nombre = nuevaInfo.nombre;
      if (typeof nuevaInfo.categoria !== "undefined")
        Solicitud.categoria = nuevaInfo.categoria;
      if (typeof nuevaInfo.fotos !== "undefined")
        Solicitud.fotos = nuevaInfo.fotos;
      if (typeof nuevaInfo.descripcion !== "undefined")
        Solicitud.descripcion = nuevaInfo.descripcion;
      if (typeof nuevaInfo.anunciante !== "undefined")
        Solicitud.anunciante = nuevaInfo.anunciante;
      if (typeof nuevaInfo.ubicacion !== "undefined")
        Solicitud.ubicacion = nuevaInfo.ubicacion;
      Solicitud.save()
        .then((updated) => {
          res.status(201).json(updated.publicData());
        })
        .catch(next);
    })
    .catch(next);
}

function eliminarSolicitud(req, res, next) {
  Solicitud.findOneAndDelete({ _id: req.params.id }).then((r) => {
    res.status(200).send(`Solicitud ${req.params.id} eliminada: ${r}`);
  });
}

function count(req, res, next) {
  var idMascota = req.params.id;
  Solicitud.aggregate([
    { $match: { idMascota: idMascota } },
    { $count: "total" },
  ]).then((r) => {
    res.status(200).send(r);
  });
}

module.exports = {
  crearSolicitud,
  obtenerSolicitud,
  modificarSolicitud,
  eliminarSolicitud,
	count
};
