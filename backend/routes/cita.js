const { Router } = require("express");
const { check } = require("express-validator");
const { crearCita, getCitas } = require("../controllers/cita");
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
    validarCampos
  ],
  crearCita
);

router.get(
  '/:id',
  getCitas
  )

module.exports = router;
