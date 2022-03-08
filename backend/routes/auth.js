/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
  cargarUsuario,
} = require("../controllers/auth");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.post(
  "/new",
  [
    // middlewares
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("apellido", "El apellido es obligatorio").not().isEmpty(),
    check("correo", "El correo es obligatorio").isEmail(),
    check("telefono", "El telefono es obligatorio").not().isEmpty(),
    check(
      "contrasenia",
      "La Contrasenia debe de ser de 6 o mas caracteres"
    ).isLength({ min: 6 }),

    validarCampos,
  ],
  crearUsuario
);

router.post(
  "/",
  [
    check("correo", "El correo es obligatorio").isEmail(),
    check("contrasenia", "La contrasenia debe de ser de 6 caracteres").isLength(
      {
        min: 6,
      }
    ),
    validarCampos,
  ],
  loginUsuario
);

router.get("/perfil/:id", validarJWT, cargarUsuario);

router.get("/renew", validarJWT, revalidarToken);

module.exports = router;
