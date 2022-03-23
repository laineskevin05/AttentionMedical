const { Router } = require("express");
const { check } = require("express-validator");
const { buscarHospital, registrarDoctor } = require("../controllers/hospital");
const { validarCampos } = require("../middlewares/validar-campos");


const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

//Buscar Hospital
router.get("/buscar/:nombreH", validarJWT, buscarHospital);
module.exports = router;

//REGISTRAR DOCTOR
router.post(
    "/newdoctor/:id/:correo",
    [
      check("correo", "El correo es obligatorio").isEmail(),
      check("horaEntrada", "La hora es obligatoria").not().isEmpty(),
      check("horaSalida", "La hora es obligatoria").not().isEmpty(),
      check("especialidad", "El nombre de la especialidad es obligatorio").not().isEmpty(),
      check("dias", "Los dias disponibles son obligatorios").not().isEmpty(),    
      validarCampos
    ],
    registrarDoctor
  ); 
  
