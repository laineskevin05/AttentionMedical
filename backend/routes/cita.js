const { Router } = require("express");
const { check } = require("express-validator");
const { crearCita, getCitas, actualizarCita } = require("../controllers/cita");
const { validarCampos } = require("../middlewares/validar-campos");

const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.use(validarJWT);

router.post(
  "/crearCita",
  [
    // middlewares
    check("clinica", "El nombre de la clinca es obligatorio").not().isEmpty(),
    check("doctor", "El nombre del doctor es obligatorio").not().isEmpty(),
    check("fecha", "La fecha es obligatorio").not().isEmpty(),
    check("hora", "La hora es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  crearCita
);

// Obtener citas
router.get("/:id", getCitas);

//Editiar Cita
router.put(
  "/actualizarCita/:id",
  [
    check("clinica", "El nombre de la clinca es obligatorio").not().isEmpty(),
    check("doctor", "El nombre del doctor es obligatorio").not().isEmpty(),
    check("fecha", "La fecha es obligatorio").not().isEmpty(),
    check("hora", "La hora es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  actualizarCita
);

//Cancelar cita
router.put("/cancelarCita/:id", actualizarCita);
//Editiar cita

module.exports = router;
