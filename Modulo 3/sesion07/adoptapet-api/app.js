const URI = require('./private');

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.connect(URI.MongoURI);
mongoose.set("debug", true);

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

require('./models/Usuario');
require('./models/Mascota');
require('./models/Solicitud');
require('./config/passport');

app.use('/v1', require('./routes'));
