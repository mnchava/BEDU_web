const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
var isProduction = process.env.NODE_ENV === "production";
mongoose.connect(
  process.env.MONGODB_URI, // obtiene la url de conexión desde las variables de entorno
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
mongoose.set("debug", true);

const PORT = 4001;
var server = app.listen(process.env.PORT || 3000, function () {
  console.log('Escuchando en el puerto ' + server.address().port);
});


require("./models/Usuario");
require("./models/Mascota");
require("./models/Solicitud");
require("./config/passport");

app.use("/v1", require("./routes"));
