const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");

// const {

//     crearCentroMedico,
//     loginCentroMedico,
//     revalidarToken,
//     cargarCentroMedico
// } = require ("../controllers/centroMedico");

const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();
/*//CREAR Hospital
router.post(
    "/new",
    [
      // middlewares
      check("nombre", "El nombre es obligatorio").not().isEmpty(),
      check("correo", "El correo es obligatorio").isEmail(),
      check(
        "contrasenia",
        "La Contrasenia debe de ser de 6 o mas caracteres"
      ).isLength({ min: 6 }),
      check("telefono", "El telefono es obligatorio").not().isEmpty(),
      check("direccion", "La direccion es obligatoria").not().isEmpty(),
      check("descripcion", "la descipcion es obligatoria").not().isEmpty(),
      
      
  
      validarCampos,
    ],
    crearCentroMedico
  );


//LOGIN
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
    loginCentroMedico
  );*/

// router.get("/renew", validarJWT, revalidarToken);

// router.get("/perfil/:id", validarJWT, cargarCentroMedico );

//Buscar Hospital
// router.get("/buscar/:nombreH", validarJWT, buacarHospital);
module.exports = router;
