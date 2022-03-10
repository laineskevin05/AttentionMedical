const { Router } = require("express");
const { check } = require("express-validator");

const { validarJWT } = require("../middlewares/validar-jwt");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  cambiarContrasenia,
  actualizarPerfil,
} = require("../controllers/config");

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

// actualizar informacion de usuario
router.put("/configuracion/:id",
  [    
    check("nombre", "El nombre no debe estar vacio").not().isEmpty(),
    check("apellido", "El apellido no debe estar vacio").not().isEmpty(),
    check("telefono", "El telefono no debe estar vacio").not().isEmpty(),
    validarCampos
  ], 
  actualizarPerfil
);

module.exports = router;
