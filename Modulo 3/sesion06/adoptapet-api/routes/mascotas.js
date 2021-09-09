const router = require("express").Router();
const {
  crearMascota,
  obtenerMascotas,
  modificarMascota,
  eliminarMascota,
} = require("../controllers/mascotas");

router.get("/", obtenerMascotas);
router.get("/:id", obtenerMascotas);
router.post("/", crearMascota);
router.put("/:id", modificarMascota);
router.delete("/:id", eliminarMascota);
router.get('/count/:cat', count);

module.exports = router;
