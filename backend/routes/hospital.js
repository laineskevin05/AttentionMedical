const { Router } = require("express");
const { check } = require("express-validator");
const { buscarHospital } = require("../controllers/hospital");
const { validarCampos } = require("../middlewares/validar-campos");


const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

//Buscar Hospital
router.get("/buscar/:nombreH", validarJWT, buscarHospital);
module.exports = router;
