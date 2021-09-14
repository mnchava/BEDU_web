const mongoose = require("mongoose");

const SolicitudSchema = new mongoose.Schema(
  {
    fechaDeCreacion: String,
    idMascota: { type: mongoose.Schema.Types.ObjectId, ref: "Mascota" },
    idUsuarioAnunciante: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
    idUsuarioSolicitante: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
    estado: { type: String, enum: ["Aceptado", "Rechazado", "Pendiente"] },
  },
  { timestamps: true, collection: "Solicitudes" }
);

SolicitudSchema.methods.publicData = function () {
  return {
    id: this.id,
    fechaDeCreacion: this.fechaDeCreacion,
    idMascota: this.idMascota,
    idUsuarioAnunciante: this.idUsuarioAnunciante,
    idUsuarioSolicitante: this.idUsuarioSolicitante,
    estado: this.estado,
  };
};

mongoose.model("Solicitud", SolicitudSchema);
