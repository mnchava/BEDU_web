const express = require("express");
const app = express();

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

app.get("/gods/:name", (req, res, next) => {
  if (gods[req.params.name]) {
    res.send(gods[req.params.name]);
  } else {
    res.status(404).send("God Not Found");
  }
});

app.get("/constelaciones/", (req, res, next) => {
  if (req.query === {}) res.send(constelaciones);

  const search = req.query;

  if ("nombre" in search) {
    if (constelaciones[search.name]) {
      res.send(constelaciones[search.name]);
    } else {
      res.status(404).send("Esa constelacion no existe");
    }
  } else if ("abreviatura" in search) {
		let found;

		Object.keys(constelaciones).forEach((constelacion) => {
			const abv = constelaciones[constelacion]['abreviatura']
			if (abv == search["abreviatura"]) {
				found = constelaciones[constelacion];
			}
		});

		if (found) {
			res.send(found);
		} else {
			res.status(404).send("Esa constelacion no existe");
		}
  } else if ("superficie" in search) {
		let found;

		Object.keys(constelaciones).forEach((constelacion) => {
			const sup = constelaciones[constelacion]['superficie']
			if (sup == search["superficie"]) {
				found = constelaciones[constelacion];
			}
		});

		if (found) {
			res.send(found);
		} else {
			res.status(404).send("Esa constelacion no existe");
		}
  } else if ("num_estrellas" in search) {
		let found;

		Object.keys(constelaciones).forEach((constelacion) => {
			const estrellas = constelaciones[constelacion]['num_estrellas']
			if (estrellas == search["num_estrellas"]) {
				found = constelaciones[constelacion];
			}
		});

		if (found) {
			res.send(found);
		} else {
			res.status(404).send("Esa constelacion no existe");
		}
  } else if ("estr_mas_brillante" in search) {
		let found;

		Object.keys(constelaciones).forEach((constelacion) => {
			const estrella = constelaciones[constelacion]['estr_mas_brillante']
			if (estrella == search["estr_mas_brillante"]) {
				found = constelaciones[constelacion];
			}
		});

		if (found) {
			res.send(found);
		} else {
			res.status(404).send("Esa constelacion no existe");
		}
  } else {
    res.status(404).send("Parametro de busqueda no existe");
  }
});
