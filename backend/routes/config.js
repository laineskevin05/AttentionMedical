const { Router } = require("express");
const { check } = require("express-validator");

const { validarJWT } = require("../middlewares/validar-jwt");
const { validarCampos } = require("../middlewares/validar-campos");
const { cambiarContrasenia } = require("../controllers/config");

const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);

//cambiar la contraseña del usu
router.post(
  "/cambiarcontrasenia",
  [
    check("uid", "El uid es obligatorio"),
    check("contrasenia", "La contrasenia debe de ser de 6 caracteres").isLength(
      {
        min: 6,
      }
    ),
    validarCampos,
  ],
  cambiarContrasenia
);

module.exports = router;
