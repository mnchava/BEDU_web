const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const gods = {
  Zeus: { live: "Olympus", symbol: "Thunderbolt" },
  Hades: { live: "Underworld", symbol: "Cornucopia" },
};

app.get("/gods", (req, res, next) => {
  res.send(gods);
});

app.get("/gods/:name", (req, res, next) => {
  if (gods[req.params.name]) {
    res.send(gods[req.params.name]);
  } else {
    res.status(404).send("God Not Found");
  }
});

const constelaciones = {
  Andromeda: {
    abreviatura: "And",
    superficie: 722.3,
    num_estrellas: 152,
    estr_mas_brillante: "Alpheratz",
  },
  Pavo: {
    abreviatura: "Pav",
    superficie: 377.7,
    num_estrellas: 87,
    estr_mas_brillante: "Peacock",
  },
  Volans: {
    abreviatura: "Vol",
    superficie: 141.4,
    num_estrellas: 31,
    estr_mas_brillante: "Beta Volantis",
  },
  Tucana: {
    abreviatura: "Tuc",
    superficie: 294.6,
    num_estrellas: 45,
    estr_mas_brillante: "Alfa Tucanae ",
  },
  Chamaeleon: {
    abreviatura: "Cha",
    superficie: 131.6,
    num_estrellas: 31,
    estr_mas_brillante: "Alfa Chamaeleontis",
  },
};

app.post('/constelaciones/:name', (req, res) => {
  const name = req.params.name;
  const body = req.body;

	if (constelaciones[name]) {
		res.status(409).send('Ya existe una constelacion con ese nombre.');
	}

  constelaciones[name] = body;
  res.status(200).send(constelaciones);
});

app.get("/constelaciones/search", (req, res) => {
  const search = req.query;

  if (Object.keys(search).length == 0) {
    res.send(constelaciones);
  } else {
		const filter = Object.keys(search)[0];
		const value = Object.values(search)[0];

		for (constelacion in constelaciones) {
			if (constelaciones[constelacion][filter] == value) res.send(constelaciones[constelacion]);
		}
		res.status(404).send('Esa constelacion no existe');

  }
});

app.put('/constelaciones/', (req, res) => {
  const name = req.query.name;
  const body = req.body;
	
	if (constelaciones[name]){
		constelaciones[name] = body;
		res.send(constelaciones)
  } else {
    res.status(404).send('Esa constelacion no existe');
  }
});

app.delete('/constelaciones/:name', (req, res) => {
	const name = req.params.name;

  if (delete constelaciones[name]){
    res.send(constelaciones)
  } else {
    res.status(500)
  }
});