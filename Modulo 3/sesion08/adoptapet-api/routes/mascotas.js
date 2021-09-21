const router = require("express").Router();
const {
  crearMascota,
  obtenerMascota,
  modificarMascota,
  eliminarMascota,
	count
} = require("../controllers/mascotas");

router.get("/", obtenerMascota);
router.get("/:id", obtenerMascota);
router.post("/", crearMascota);
router.put("/:id", modificarMascota);
router.delete("/:id", eliminarMascota);
router.get('/count/:cat', count);

module.exports = router;
