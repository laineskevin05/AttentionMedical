const { Router } = require("express");
const { check } = require("express-validator");
const { getUsuario, getHospital, modCuentactiva, loginAdmi } = require("../controllers/admin");
const { validarCampos } = require("../middlewares/validar-campos");

const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

//Logguear Admin
router.post(
    "/authAdmin",
    [
      check("correo", "El correo es obligatorio").isEmail(),
      check("contrasenia", "La contrasenia debe de ser de 6 caracteres").isLength(
        {
          min: 6,
        }
      ),
      validarCampos,
    ],loginAdmi
);

router.use(validarJWT);

// Obtener Usuarios y Hospialtes
router.get("/getusuarios", getUsuario);

router.get("/gethospitales", getHospital);

//Desacrtivar/Activar cuenta Usuarios o Hospialtes
router.put("/banearCuenta", modCuentactiva);

module.exports= router;